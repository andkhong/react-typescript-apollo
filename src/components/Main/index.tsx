import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { queryListings } from 'gqls/listings/';
import MainWrapper from 'styled/Wrappers/Main';

import Listings from './Listings';
import Loading from 'shared/Loading';
import { Props } from './interface';

const Main = (props: Props) => {
  if (props.loading) return <Loading />;
  return (
    <MainWrapper>
      <Listings {...props} />
    </MainWrapper>
  ) 
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
)(Main);