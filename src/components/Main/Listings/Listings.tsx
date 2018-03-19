import * as React from 'react';
import { Link } from 'react-router-dom';
import ListingWrapper from './Listings.wrapper';
import { Props, Listing } from '../interface';

const Listings = ({ listings }: Props) => (
  <ListingWrapper>
    {listings.map((listing: Listing, index: number) => (
      <div className="card" key={index}>
        <Link to={`rooms/${listing.listingId}`}>
          <div className="image-container">
            <img src={listing.listingPicUrl}  />
          </div>
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

