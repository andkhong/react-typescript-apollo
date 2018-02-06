import * as React from 'react';
import { Props } from '../interface';

class Authorized extends React.Component<Props, {}> {
  render(){
    return (
      <div>
        <button> Log Out </button>
      </div>
    )
  }
}

export default Authorized;