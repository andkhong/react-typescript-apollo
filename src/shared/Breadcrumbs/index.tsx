import * as React from 'react';
import { Link } from 'react-router-dom';

const routes = {
  '/bookings/wallet': 'Confirm Wallet Address',
  '/bookings/review': 'Review terms & submit payment',
  '/bookings/payment': 'Payment'
};
// ]
//   {
//     path: '/bookings/wallet',
//     text: 'Confirm Wallet Address'
//   },
//   {
//     path: '/bookings/review',
//     text: 'Review terms & submit payment'
//   },
//   {
//     path: '/bookings/payment',
//     text: 'Payment'
//   }
// ];
console.log(routes);

interface Props {
  path: string;
  text: string;
}

const Breadcrumbs = (trail: Props[]) => (
  <div>
    {trail.map((item: any, index: number) => (
      <div key={index}>
        <Link to={`${item.path}?${new URL(window.location.href).search.slice(1)}`}> 
          {item.text} 
        </Link>
      </div>
    ))}
  </div>
);

export default Breadcrumbs;