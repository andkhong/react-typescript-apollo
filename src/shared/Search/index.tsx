import * as React from 'react';

class Search extends React.Component {
    state = { search: '' }

    handleInput = (e: any) => this.setState({ search: e.target.value })

    fetchHomes = (e: any) => {
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