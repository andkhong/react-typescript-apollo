import * as React from 'react';
import FormWrapper from './Form.wrapper';
import DefaultButtonWrapper from 'styled/Buttons/Default';
import Calendar from 'shared/Calendar';
import { isStorageValid } from 'utils/isStorageValid';
import { parseQueryParams, stringifyQueryParams, addQueryParamsToUrl, addQueryStringToUrl } from 'utils/queryParams';
import { QueryParams, Props, State, CalendarPicker } from './interface';

class Form extends React.Component<Props, State> {
  state = { guests: '1' };
  checkInDate: string|null = null;
  checkOutDate: string|null = null;

  shouldComponentUpdate({}, nextState: State) {
    if (this.state.guests !== nextState.guests) return true;
    return false;
  }

  componentWillMount (){
    const search = location.search.slice(1);
    if (!search.length) return;    
    addQueryStringToUrl(search);
    const queryForms = handleQuery(search, this.props.room.maxGuests.toString()) as QueryParams;
    this.setState({ guests: queryForms.guests });
  }

  render() {
    const calendarProps = {
      datesBooked: this.props.room.datesBooked,
      minimumNights: this.props.room.minimumNights,
      collectCalendarDates: this.collectCalendarDates
    };
    return (
      <FormWrapper>
        <form onSubmit={this.requestToBook}>
          <Calendar {...calendarProps} />
          <input
            type="number"
            name="guests"
            min="1" max={this.props.room.maxGuests}
            onChange={this.handleGuestsInput}
            value={this.state.guests}
          />
          <DefaultButtonWrapper className="btn">
            <button>Request To Book</button>
          </DefaultButtonWrapper>
        </form>
      </FormWrapper>
    )
  }
  
  collectCalendarDates = ({ checkInDate, checkOutDate }: CalendarPicker): void => {
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate
  };

  handleGuestsInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    if (parseInt(value) <= this.props.room.maxGuests) {
      addQueryParamsToUrl({ guests: value });
      this.setState({ guests: value });
    }
  }

  requestToBook = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!isStorageValid('bee-token')) {
      this.props.toggleAuthForms('Login');
    } else {
      const search = Object.assign(this.state, {
        checkInDate: this.checkInDate,
        checkOutDate: this.checkOutDate
      });
      this.props.history.push(`/payment?${stringifyQueryParams(search)}`);
    }
  }

}

export default Form;

function handleQuery(url: string, maxGuests: string): object{
  const queryParams = parseQueryParams(url) as QueryParams;
  const checkInDate = queryParams.checkInDate ? queryParams.checkInDate : null;
  const checkOutDate = queryParams.checkOutDate ? queryParams.checkOutDate : null;
  const guests = (queryParams.guests && parseInt(queryParams.guests) <= parseInt(maxGuests))
    ? queryParams.guests 
    : '1';
  return { checkInDate, checkOutDate, guests };
}