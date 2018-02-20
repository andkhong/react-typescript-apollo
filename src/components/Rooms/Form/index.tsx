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
  room: {
    maxGuests: string;
    datesBooked: string[];
  };
}

interface State {
  checkInDate: string|null;
  checkOutDate: string|null;
  guests: string;
}

class Form extends React.Component<Props, State> {
  state = { checkInDate: null, checkOutDate: null, guests: '1' };

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    if (this.state.guests !== nextState.guests) return true;
    if (this.props.location.search === nextProps.location.search) return false;
    return false;
  }

  componentWillMount (){
    let url: string = new URL(window.location.href).search.slice(1);
    if (!url.length) return;    
    addQueryStringToUrl(url);
    const queryForms = handleQuery(url, this.props.room.maxGuests);
    this.setState(queryForms);
  }

  collectCalendarDates = ({ checkInDate, checkOutDate }: State): void => this.setState({ checkInDate, checkOutDate });

  handleGuestsInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    if (value <= this.props.room.maxGuests) {
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
    const { datesBooked, maxGuests } = this.props.room;
    return (
      <div>
        <form onSubmit={this.requestToBook}>
          <Calendar collectCalendarDates={this.collectCalendarDates} datesBooked={datesBooked} />
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