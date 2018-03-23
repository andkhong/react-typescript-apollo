import * as React from 'react';
import { Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { queryListings } from 'gqls/listings/';
import ListingWrapper from './Listings.wrapper';

import Error from 'shared/Error';
import Loading from 'shared/Loading';

import { Props, Listing } from '../interface';

const Listings = (props: Props) => {
  if (props.loading) return <Loading />
  if (props.error) return <Error />
  const { listings } = props;
  return (
    <ListingWrapper>
      {listings.map((listing: Listing, index: number) => (
        <div className="card-container" key={index}>
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
};

export default compose (
  graphql(queryListings, {
    props: ({ data: {
      loading,
      error,
      listings
    } }: any) => {
      if (loading) return { loading };
      if (error) return { error };
      return { loading, error, listings };
    }
  })
)(Listings);

