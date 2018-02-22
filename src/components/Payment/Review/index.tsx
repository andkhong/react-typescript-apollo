import * as React from 'react';
import { Link } from 'react-router-dom';

import { addQueryStringToUrl } from 'utils/queryParams';

class Review extends React.Component {
  search: string = location.search.slice(1);

  componentWillMount(){
    addQueryStringToUrl(this.search);;
  }

  render() {
    return (
      <div>
        Review
        <Link to={`/payment/wallet?${this.search}`}>Wallet</Link>
      </div>
    )
  }
}

export default Review;