import 'react-dates/initialize'; // React Dates initialize must be imported from top
import 'shared/Calendar/datepicker.scss'; // Do not modify unless you absolutely must. Be very careful
import { DateRangePicker } from 'react-dates';
import * as React from 'react';

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
        focusedInput: null,
    }

    handleDateChange = ({ startDate, endDate}: any) => {
        this.setState({ startDate, endDate });
        this.props.collectCalendarDates({ startDate, endDate });
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
            />
        );
    }
}

export default Calendar;