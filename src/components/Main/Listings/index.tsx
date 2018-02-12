import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  listing: {
    listingId: string;
    listingPicUrl: string
  }
}

const Listings = ({ listing }: Props) => (
  <Link to={`rooms/${listing.listingId}`}>
    {/* <div style={{ height: '100px', width: '100px' }}> */}
      <img src={listing.listingPicUrl} />
    {/* </div> */}
  </Link>
);

export default Listings;