import * as React from 'react';
import Calendar from 'shared/Calendar';
import { isStorageValid } from 'utils/isStorageValid';
import { parseQueryParams, stringifyQueryParams, addQueryParamsToUrl, addQueryStringToUrl } from 'utils/queryParams';
import { RouterProps } from 'components/interface';

interface QueryParams {
  checkInDate: string;
  checkOutDate: string;
  guests: string;
}

interface Props extends RouterProps {
  toggleAuthForms: (form: string) => void;
  maxGuests: string;
  datesBooked: string[][];
}

interface State {
  guests: string;
}

class Form extends React.Component<Props, State> {
  state = { guests: '1' };
  checkInDate: string|null = null;
  checkOutDate: string|null = null;

  shouldComponentUpdate({}, nextState: State) {
    if (this.state.guests !== nextState.guests) return true;
    return false;
  }

  componentWillMount (){
    let url: string = new URL(window.location.href).search.slice(1);
    if (!url.length) return;    
    addQueryStringToUrl(url);
    const queryForms = handleQuery(url, this.props.maxGuests) as QueryParams;
    this.checkInDate = queryForms.checkInDate;
    this.checkOutDate = queryForms.checkOutDate;
    this.setState({ guests: queryForms.guests });
  }

  collectCalendarDates = ({ checkInDate, checkOutDate }: any): void => {
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
      this.props.history.push(`/bookings?${stringifyQueryParams(this.state)}`);
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