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
          <Carousel initialPic={listing.listingPicUrl} photos={[]} />
          <div>{listing.pricePerNight} BEE per night</div>
          <div>{listing.title}</div>
          <div>
            <span className="city">{listing.city},&nbsp;</span>
            <span className="country">{listing.country}</span>
          </div>
        </Link>
      </div>
    ))}
  </ListingWrapper>
);

export default Listings;

