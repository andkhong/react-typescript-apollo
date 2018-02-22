import * as React from 'react';
import { Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { Props } from '../interface';

class Authorized extends React.Component<Props, {}> {
  logOut = () => {
    window.localStorage.removeItem('bee-token');
    this.props.client.resetStore();
    window.location.reload();
  }
  render(){
    return (
      <div>
        <Link to="/accounts/trips">Trips</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/help">Help</Link>
        <button onClick={this.logOut}> Log Out </button>
      </div>
    )
  }
}

export default withApollo(Authorized);