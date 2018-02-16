import * as React from 'react';
import { Link } from 'react-router-dom';

// interface Props {
//   path: string;
//   text: string;
// }

const Breadcrumbs = (trail: any) => (
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
