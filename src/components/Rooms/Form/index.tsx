import * as React from 'react';
import Calendar from 'shared/Calendar';
import { parseQueryParams, stringifyQueryParams, addQueryParamsToUrl, addQueryStringToUrl } from 'utils/queryParams';
import { RouterProps } from 'components/interface';

interface QueryParams {
  checkInDate: string;
  checkOutDate: string;
  guests: string;
}

interface Props extends RouterProps {}

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
    let url = this.props.history.location.state || this.props.history.location.search;
    url = (url[0] === '?') ? url.slice(1) : url;
    addQueryStringToUrl(url);
    const queryForms = handleQuery(url);
    this.setState(queryForms);
  }

  collectCalendarDates = ({ checkInDate, checkOutDate }: State): void => this.setState({ checkInDate, checkOutDate });

  handleGuestsInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    addQueryParamsToUrl({ guests: value });
    this.setState({ guests: value });
  }

  requestToBook = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
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
            min="1" max="5"
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

function handleQuery(url: string): object{
  const queryParams = parseQueryParams(url) as QueryParams;
  const checkInDate = queryParams.checkInDate ? queryParams.checkInDate : null;
  const checkOutDate = queryParams.checkOutDate ? queryParams.checkOutDate : null;
  const guests = (queryParams.guests && parseInt(queryParams.guests)) ? queryParams.guests : '1';
  return { checkInDate, checkOutDate, guests }
}