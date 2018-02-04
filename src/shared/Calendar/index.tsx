import 'react-dates/initialize'; // React Dates initialize must be imported from top
import 'shared/Calendar/datepicker.scss'; // Do not modify unless you absolutely must. Be very careful
import * as React from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import { parseQueryParams, addQueryParamsToUrl } from 'utils/queryParams';

interface Props {
  collectCalendarDates: ({startDate, endDate}: any) => void;
}

interface State {
  startDate: any;
  endDate: any;
  focusedInput: any;
}

class Calendar extends React.Component<Props, State> {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return true; // Optimize Later
  }

  componentWillMount(){
    const url = new URL(window.location.href);
    if (!url.search.length) {
      return;
    }
    const queryParams: any = parseQueryParams(url.search.slice(1));
    const startDate = queryParams.startDate ? moment(queryParams.startDate) : null;
    const endDate = queryParams.endDate ? moment(queryParams.endDate) : null;
    this.setState({ startDate, endDate });
  }

  handleDateChange = ({ startDate, endDate}: any) => {
    const checkInDate = startDate ? startDate.format('MM-DD-YYYY') : null;
    const checkOutDate = endDate ? endDate.format('MM-DD-YYYY') : null;
    addQueryParamsToUrl({ 
      startDate: checkInDate,
      endDate: checkOutDate
    });
    this.props.collectCalendarDates({ startDate, endDate });
    this.setState({ startDate, endDate });
  }

  handleFocusChange = (focusedInput: any) => this.setState({ focusedInput })

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