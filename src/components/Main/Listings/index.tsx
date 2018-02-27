import * as React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'shared/Carousel';
import ListingWrapper from 'styled/Wrappers/ListingWrapper';
import { Props, Listing } from '../interface';

const Listings = ({ listings }: Props) => (
  <ListingWrapper>
    {listings.map((listing: Listing, index: number) => (
      <div key={index}>
        <Link to={`rooms/${listing.listingId}`}>
          <div style={{ height: '400px', width: '400px' }}>
            <Carousel initialPic={listing.listingPicUrl} photos={[]} />
          </div>
          <div>{listing.pricePerNight} BEE per night</div>
          <div>{listing.description}</div>
        </Link>
      </div>
    ))}
  </ListingWrapper>
);

export default Listings;