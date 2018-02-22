import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { queryListings } from 'gqls/listings/';
import MainWrapper from 'styled/Wrappers/Main';

// import Title from './Title';
import Listings from './Listings';
import Loading from 'shared/Loading';

const Main = (props: any) => {
  if(props.loading) return <Loading />;
  return (
    <MainWrapper>
      {/* <Title /> */}
      {props.listings.map((listing: any, index: number) => <Listings key={index} listing={listing} /> )}
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