import * as React from 'react';

class Search extends React.Component {
  state = { search: '' }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: e.currentTarget.value });
  }

  fetchHomes = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.fetchHomes}>
          <input
            placeholder="Search"
            value={this.state.search}
            onChange={this.handleInput}
          />
          <button> Search </button>
        </form>
      </div>
    );
  }
}

export default Search;