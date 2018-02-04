import 'react-dates/initialize'; // React Dates initialize must be imported from top
import 'shared/Calendar/datepicker.scss'; // Do not modify unless you absolutely must. Be very careful
import * as React from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import { parseQueryParams, addQueryParamsToUrl } from 'utils/queryParams';

interface DatePicker {
  startDate: moment.Moment|null;
  endDate: moment.Moment|null;
}

interface CalendarPicker {
  checkInDate: string|null;
  checkOutDate: string|null;
}

interface Props {
  collectCalendarDates: ({ checkInDate, checkOutDate }: CalendarPicker) => void;
}

interface State {
  startDate: moment.Moment|null;
  endDate: moment.Moment|null;
  focusedInput: string|null;
}

class Calendar extends React.Component<Props, State> {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return true;
  }

  componentWillMount(){
    const url = new URL(window.location.href);
    if (!url.search.length) {
      return;
    }
    const queryParams: any = parseQueryParams(url.search.slice(1));
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
    const checkInDate = startDate ? startDate.format('MM-DD-YYYY') : null;
    const checkOutDate = endDate ? endDate.format('MM-DD-YYYY') : null;
    addQueryParamsToUrl({ checkInDate, checkOutDate });
    this.props.collectCalendarDates({ checkInDate, checkOutDate });
    this.setState({ startDate, endDate });
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
        onFocusChange={(focusedInput: string|null) => this.setState({ focusedInput })}
        hideKeyboardShortcutsPanel={true}
        showClearDates
        reopenPickerOnClearDates
        required
      />
    );
  }
}

export default Calendar;
