import gql from 'graphql-tag';

export const queryRooms = gql`
  query {
    room (listingId: $listingId) @rest(type: Room, path: "listings/:listingId") {
      accomodations,
      addressLine1,
      addressLine2,
      amenities,
      city,
      country,
      currency,
      datesBooked,
      description,
      hostAbout,
      hostDateJoined,
      hostEmail,
      hostFirstName,
      hostId,
      hostPic,
      lat,
      listingId,
      listingPicUrl,
      lng,
      maxGuests,
      photos,
      physicalAddressId,
      postalCode,
      pricePerNight,
      securityDeposit,
      state,
      title
    }
  }
`;
