import * as React from 'react';
import { compose, graphql } from 'react-apollo';
import { queryTrips } from 'gqls/accounts/';

const Trips = () => (
  <div>
    Trips
  </div>
);

export default compose(
  graphql(queryTrips, {
    props: (props: any) => {
      console.log('this is props', props);
    }
  })
)(Trips);