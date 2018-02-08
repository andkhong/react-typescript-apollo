import gql from 'graphql-tag';

export const Query = gql`
  query {
    bookings @rest(type: Bookings, path: "bookings/") {
      bookingId,
      listingId,
      guestId,
      hostId,
      hostFirstName,
      hostPic,
      checkInDate,
      checkOutDate,
      title,
      streetAddress,
      city,
      state,
      pricePerNight,
      currency,
      rentalContractAddress,
      transactionHash,
      contractVersion,
      status
    }
  }
`;
