import 'react-dates/initialize'; // React Dates initialize must be imported from top
import 'shared/Calendar/datepicker.scss'; // Do not modify unless you absolutely must. Be very careful
import * as React from 'react';
import DateRangePicker from 'react-dates/lib/components/DateRangePicker';
import moment from 'moment';
import { parseQueryParams, addQueryParamsToUrl } from 'utils/queryParams';

const limit: string = moment().add(6, 'months').format('YYYY-MM-DD');

interface CalendarPicker {
  checkInDate: string|null;
  checkOutDate: string|null;
}

interface Props {
  datesBooked: string[];
  collectCalendarDates: ({ checkInDate, checkOutDate }: CalendarPicker) => void;
}

interface State {
  startDate: moment.Moment|null;
  endDate: moment.Moment|null;
  focusedInput: string|null;
}

class Calendar extends React.Component<Props, State> {
  state = { startDate: null, endDate: null, focusedInput: null };

  componentWillMount(){
    const url = new URL(window.location.href);
    if (!url.search.length) return;
    const queryParams = parseQueryParams(url.search.slice(1)) as CalendarPicker;
    const checkInDate = queryParams.checkInDate && moment(queryParams.checkInDate).isValid() 
      ? moment(queryParams.checkInDate) 
      : null;
    const checkOutDate = queryParams.checkOutDate && moment(queryParams.checkOutDate).isValid() 
      ? moment(queryParams.checkOutDate) 
      : null;
    addQueryParamsToUrl(queryParams);
    this.setState({ startDate: checkInDate, endDate: checkOutDate });
  }

  handleDateChange = ({ startDate, endDate }: State) => {
    const checkInDate: string|null = startDate ? startDate.format('MM-DD-YYYY') : null;
    const checkOutDate: string|null = endDate ? endDate.format('MM-DD-YYYY') : null;
    addQueryParamsToUrl({ checkInDate, checkOutDate });
    this.setState({ startDate, endDate });
    this.props.collectCalendarDates({ checkInDate, checkOutDate });
  }

  handleFocus = (focusedInput: string|null) => this.setState({ focusedInput });

  handleBlock = (date: moment.Moment): boolean => {
    const { startDate, focusedInput } = this.state;
    const { datesBooked } = this.props;
    const formattedDate = date.format('YYYY-MM-DD');
    return (focusedInput === 'startDate') 
      ? handleCheckIn(formattedDate, datesBooked)
      : handleCheckOut(formattedDate, datesBooked, startDate);
  }

  render() {
    return (
      <DateRangePicker 
        numberOfMonths={1}
        minimumNights={1}
        startDate={this.state.startDate}
        startDateId="startDate"
        endDate={this.state.endDate}
        endDateId="endDate"
        onDatesChange={this.handleDateChange} 
        focusedInput={this.state.focusedInput}
        onFocusChange={this.handleFocus}
        hideKeyboardShortcutsPanel={true}
        isDayBlocked={this.handleBlock}
        showClearDates
        reopenPickerOnClearDates
        required
      />
    );
  }
}

export default Calendar;

function handleCheckIn(date: string, range: string[]): boolean {
  if (!range.length) return date > limit;
  for (let i = 0, len = range.length; i < len; i++) {
    if (date >= range[i][0] && date < range[i][1]) {
      return true;
    }
  }
  return date > limit;
};

function handleCheckOut(date: string, range: string[], startDate: moment.Moment|null): boolean {
  if (!range.length) return date > limit;
  const parsedStartDate: string|null = startDate ? startDate.format('YYYY-MM-DD') : null;
  let innerBound: string|null = null;
  for (let i = 0, len = range.length; i < len; i++) {
    if (date > range[i][0] && date <= range[i][1]) {
      return true;
    }
    if (parsedStartDate) {
      if (innerBound && parsedStartDate < range[i][0]) {
        return !(date >= innerBound && date <= range[i][0]);
      }
      if (parsedStartDate >= range[i][1]) {
        innerBound = range[i][1];
        continue;
      }
    }
  }
  return false;
};
