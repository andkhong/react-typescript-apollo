import gql from 'graphql-tag';

export const Query = gql`
  query {
    listings @rest(type: Listings, path: "listings/") {
        description,
        hostId,
        listingPicUrl,
        listingId,
        pricePerNight,
        title   
    }
  }
`;
