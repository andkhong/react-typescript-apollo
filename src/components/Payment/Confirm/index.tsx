import * as React from 'react';
import { Link } from 'react-router-dom';

import { addQueryStringToUrl } from 'utils/queryParams';

class Confirm extends React.Component {
  search: string = location.search.slice(1);

  componentWillMount(){
    addQueryStringToUrl(this.search);;
  }

  render() {
    return (
      <div>
        Confirm
        <Link to={`/payment/review?${this.search}`}>Review</Link>
      </div>
    )
  }
}

export default Confirm;