import * as React from 'react';
import { addQueryStringToUrl } from 'utils/queryParams';

class Wallet extends React.Component {
  search: string = location.search.slice(1);

  componentWillMount(){
    addQueryStringToUrl(this.search);;
  }

  render() {
    return (
      <div>
        Wallet
      </div>
    )
  }
}

export default Wallet;