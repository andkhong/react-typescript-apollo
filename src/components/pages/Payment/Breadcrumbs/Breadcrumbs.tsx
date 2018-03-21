import * as React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const { pathname } = location;
  const search = location.search.slice(1);
  return (
    <div>
      <span>
        {pathname === '/payment/wallet' || pathname === '/payment/review' 
          ? <Link to={`/payment/confirm?${search}`}>1. Confirm </Link>
          : '1. Confirm'
        }
      </span>
      <span>
        {pathname === '/payment/wallet' 
          ? <Link to={`/payment/review?${search}`}>2. Review </Link>
          : '2. Review'
        }
      </span>
      <span>
        3. Wallet
      </span>
    </div>
  )
}

export default Breadcrumbs;

