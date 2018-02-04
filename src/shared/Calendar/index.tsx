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

interface State {
  startDate: moment.Moment|null;
  endDate: moment.Moment|null;
  focusedInput: string|null;
}

interface Props {
  collectCalendarDates: ({ startDate, endDate }: DatePicker) => void;
}

class Calendar extends React.Component<Props, State> {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
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
    this.setState({ 
      startDate: checkInDate,
      endDate: checkOutDate
    });
  }

  handleDateChange = ({ startDate, endDate }: State) => {
    addQueryParamsToUrl({
      checkInDate: startDate ? startDate.format('MM-DD-YYYY') : null,
      checkOutDate: endDate ? endDate.format('MM-DD-YYYY') : null
    });
    this.props.collectCalendarDates({ startDate, endDate });
    this.setState({ startDate, endDate });
  }

  handleFocusChange = (focusedInput: string|null) => this.setState({ focusedInput });

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
        onFocusChange={this.handleFocusChange}
        hideKeyboardShortcutsPanel={true}
        showClearDates
        reopenPickerOnClearDates
        required
      />
    );
  }
}

export default Calendar;
