import * as React from 'react';
import { Link } from 'react-router-dom';
import ListingWrapper from 'styled/Wrappers/ListingWrapper';

interface Props {
  listing: {
    listingId: string;
    listingPicUrl: string
  }
}

const Listings = ({ listing }: Props) => (
  <ListingWrapper>  
    <Link to={`rooms/${listing.listingId}`}>
      <img src={listing.listingPicUrl} />
    </Link>
  </ListingWrapper>
);

export default Listings;