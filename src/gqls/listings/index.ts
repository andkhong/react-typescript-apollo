import gql from 'graphql-tag';

export const queryListings = gql`
  query {
    listings @rest(type: Listings, path: "listings/") {
        city,
        country,
        description,
        hostId,
        listingPicUrl,
        listingId,
        pricePerNight,
        state,
        title   
    }
  }
`;
