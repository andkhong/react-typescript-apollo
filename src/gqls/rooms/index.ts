import gql from 'graphql-tag';

export const queryRoom = gql`
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
      houseRules,
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
      title,
      welcomeMessage
    }
  }
`;
