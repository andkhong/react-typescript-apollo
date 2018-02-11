import gql from 'graphql-tag';

export const Query = gql`
  query {
    room (listingId: $listingId) @rest(type: Room, path: "listings/:listingId") {
        description,
        hostId,
        listingPicUrl,
        listingId,
        pricePerNight,
        title
    }
  }
`;
