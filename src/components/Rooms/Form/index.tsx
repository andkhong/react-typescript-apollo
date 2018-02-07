import * as React from 'react';
import Calendar from 'shared/Calendar';
import { parseQueryParams, stringifyQueryParams, addQueryParamsToUrl } from 'utils/queryParams';
import { RouterProps } from 'components/interface';

interface QueryParams {
  checkInDate: string;
  checkOutDate: string;
  guests: string;
}

interface Props extends RouterProps {

}

interface State {
  checkInDate: string|null;
  checkOutDate: string|null;
  guests: string;
}

class Form extends React.Component<Props, State> {
  state = {
    checkInDate: null,
    checkOutDate: null,
    guests: '1'
  }

  componentWillMount (){
    const url = new URL(window.location.href);
    if (!url.search.length) {
      return;
    }
    const queryParams = parseQueryParams(url.search.slice(1)) as QueryParams;
    const checkInDate = queryParams.checkInDate ? queryParams.checkInDate : null;
    const checkOutDate = queryParams.checkOutDate ? queryParams.checkOutDate : null;
    const guests = (queryParams.guests && parseInt(queryParams.guests)) ? queryParams.guests : '1';
    this.setState({ checkInDate, checkOutDate, guests });
  }

  collectCalendarDates = ({ checkInDate, checkOutDate }: State): void => this.setState({ checkInDate, checkOutDate });

  handleGuestsInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    addQueryParamsToUrl({ guests: value });
    this.setState({ guests: value });
  }

  requestToBook = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    // Check Date Range
    const search = stringifyQueryParams(this.state);
    this.props.history.push('/bookings', search);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.requestToBook}>
          <Calendar collectCalendarDates={this.collectCalendarDates} />
          <input
            type="number"
            name="guests"
            onChange={this.handleGuestsInput}
            min="1"
            max="5"
            value={this.state.guests}
          />
          <button>Request To Book</button>
        </form>
      </div>
    )
  }
}

export default Form;