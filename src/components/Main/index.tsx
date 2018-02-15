import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { Query } from 'gqls/listings/index.ts';
import MainWrapper from 'styled/Wrappers/Main';

// import Title from './Title';
import Listings from './Listings';
// import Search from 'shared/Search';

const Main = ({ listings }: any) => (
  <MainWrapper>
    {/* <Title /> */}
    {/* <Search /> */}
    {listings && listings.map((listing: any, index: number) => (
      <Listings
        key={index}
        listing={listing} 
      />
    ))}
  </MainWrapper>
);

export default compose (
  graphql(Query, {
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