import gql from 'graphql-tag';

export const queryBookings = gql`
  query {
    bookings @rest(type: Bookings, path: "bookings/") {

    }
  }
`;
