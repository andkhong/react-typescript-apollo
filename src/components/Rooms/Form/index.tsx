import * as React from 'react';
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
    const queryForms = handleQuery(search, this.props.maxGuests) as QueryParams;
    this.checkInDate = queryForms.checkInDate;
    this.checkOutDate = queryForms.checkOutDate;
    this.setState({ guests: queryForms.guests });
  }

  collectCalendarDates = ({ checkInDate, checkOutDate }: CalendarPicker): void => {
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate
  };

  handleGuestsInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    if (value <= this.props.maxGuests) {
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

  render() {
    const { datesBooked, maxGuests } = this.props;
    return (
      <div>
        <form onSubmit={this.requestToBook}>
          <Calendar datesBooked={datesBooked} collectCalendarDates={this.collectCalendarDates} />
          <input
            type="number"
            name="guests"
            min="1" max={maxGuests}
            onChange={this.handleGuestsInput}
            value={this.state.guests}
          />
          <button>Request To Book</button>
        </form>
      </div>
    )
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