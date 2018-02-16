import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { Query } from 'gqls/listings/index.ts';
import MainWrapper from 'styled/Wrappers/Main';

// import Title from './Title';
import Listings from './Listings';
// import Search from 'shared/Search';
import Loading from 'shared/Loading';

const Main = (props: any) => {
  if(props.loading) return <Loading />;
  return (
    <MainWrapper>
      {/* <Title /> */}
      {/* <Search /> */}
      {props.listings.map((listing: any, index: number) => <Listings key={index} listing={listing} /> )}
    </MainWrapper>
  ) 
};

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