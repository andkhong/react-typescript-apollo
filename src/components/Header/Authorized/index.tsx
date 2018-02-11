import * as React from 'react';
import { Props } from '../interface';

class Authorized extends React.Component<Props, {}> {
  logOut = () => {
    window.localStorage.removeItem('bee-token');
    // Clear Apollo Store
    window.location.href = '/';
  }
  render(){
    return (
      <div>
        <button onClick={this.logOut}> Log Out </button>
      </div>
    )
  }
}

export default Authorized;