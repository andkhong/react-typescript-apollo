import * as React from 'react';

interface State {
  search: string;
  guests: string;
}

class Search extends React.Component<{}, State> {
  state = { guests: '1', search: '' };
  checkInDate: string|null = null;
  checkOutDate: string|null = null;

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: event.currentTarget.value });
  }

  handleGuestsInput = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ 
      guests: event.currentTarget.value <= '9' ? event.currentTarget.value : '1'
     });
  }


  fetchHomes = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  }
  
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
}

export default Search;