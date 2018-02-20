import * as React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'shared/Carousel';
import ListingWrapper from 'styled/Wrappers/ListingWrapper';

interface Props {
  listing: {
    description: string;
    listingId: string;
    listingPicUrl: string;
    pricePerNight: number;
  }
}

const Listings = ({ listing }: Props) => (
  <ListingWrapper>
    <Link to={`rooms/${listing.listingId}`}>
      <div style={{ height: '400px', width: '400px'}}>
        <Carousel initialPic={listing.listingPicUrl} />
      </div>
      <div>{listing.pricePerNight} BEE per night</div>
      <div>{listing.description}</div>
    </Link>
  </ListingWrapper>
);

export default Listings;