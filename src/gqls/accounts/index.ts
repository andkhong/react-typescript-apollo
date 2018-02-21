import gql from 'graphql-tag';

export const queryTrips = gql`
  query {
    trips @rest(type: Trips, path: "bookings/") {
      bookingId,
      listingId,
      status,
      title,
      description,,
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      listingPicUrl,
      checkInTS,
      checkOutTS,
      pricePerNight,
      currency,
      guestTotalAmount ,
      guestDepositAmount
    }
  }
`;
