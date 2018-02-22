import * as React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'shared/Carousel';
import ListingWrapper from 'styled/Wrappers/ListingWrapper';

interface Props {
  listing: {
    description: string;
    hostId: string;
    listingId: string;
    listingPicUrl: string;
    pricePerNight: number;
    title: string;
  }
}

const Listings = ({ listing: {
  description,
  listingId,
  listingPicUrl,
  pricePerNight
} }: Props) => (
  <ListingWrapper>
    <Link to={`rooms/${listingId}`}>
      <div style={{ height: '400px', width: '400px'}}>
        <Carousel initialPic={listingPicUrl} />
      </div>
      <div>{pricePerNight} BEE per night</div>
      <div>{description}</div>
    </Link>
  </ListingWrapper>
);

export default Listings;