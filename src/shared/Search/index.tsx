import * as React from 'react';
import Calendar from 'shared/Calendar';

interface CalendarPicker {
  checkInDate: string|null;
  checkOutDate: string|null;
}

interface State {
  search: string;
  guests: string;
}

class Search extends React.Component<{}, State> {
  state = { guests: '1', search: '' };
  checkInDate: string|null = null;
  checkOutDate: string|null = null;

  render() {
    const { guests, search } = this.state;
    return (
      <div>
        <form onSubmit={this.fetchHomes}>
          <input
            placeholder="Search"
            type="text"
            value={search}
            onChange={this.handleSearch}
          />
          <Calendar datesBooked={[]} collectCalendarDates={this.collectCalendarDates} />
          <input
            type="number"
            value={guests}
            min="1" max="9"
            onChange={this.handleGuestsInput}
          />
          <button> Search </button>
        </form>
      </div>
    );
  }

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: event.currentTarget.value });
  }

  handleGuestsInput = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ 
      guests: event.currentTarget.value <= '9' ? event.currentTarget.value : '1'
     });
  }

  collectCalendarDates = ({ checkInDate, checkOutDate }: CalendarPicker) => {
    this.checkInDate = checkInDate;
    this.checkOutDate = checkOutDate;
  }

  fetchHomes = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  }

}

export default Search;