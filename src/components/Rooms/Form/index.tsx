import * as React from 'react';
import Calendar from 'shared/Calendar';
import { parseQueryParams, stringifyQueryParams, addQueryParamsToUrl } from 'utils/queryParams';
import { RouterProps } from 'components/interface'

interface Props extends RouterProps {

}

interface State {
  checkInDate: string|null;
  checkOutDate: string|null;
  guests: number;
}

class Form extends React.Component<Props, State> {
  state = {
    checkInDate: null,
    checkOutDate: null,
    guests: 1
  }

  componentWillMount(){
    const url = new URL(window.location.href);
    if (!url.search.length) {
      return;
    }
    const queryParams = parseQueryParams(url.search.slice(1)) as { guests: string };
    const guests = (queryParams.guests && parseInt(queryParams.guests)) ? parseInt(queryParams.guests) : 1;
    this.setState({ guests });
  }

  collectCalendarDates = ({ checkInDate, checkOutDate}: State) => this.setState({ checkInDate, checkOutDate })

  handleGuestsInput = (e: any) => {
    e.preventDefault();
    addQueryParamsToUrl({ guests: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  }

  requestToBook = (e: any) => {
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