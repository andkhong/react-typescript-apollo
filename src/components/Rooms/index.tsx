import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { Query } from 'gqls/rooms/index';
import RoomsWrapper from 'styled/Wrappers/Rooms';
import Amenities from './Amenities';
import Details from './Details/';
import Host from './Host/';
import Form from './Form/';
import Reviews from './Reviews/';
import GoogleMaps from 'shared/GoogleMaps';
import Loading from 'shared/Loading';

// import { RoomProps } from './interface';
import { RouterProps } from 'components/interface';

const Rooms = (props: any) => {
  if(props.loading) return <Loading />;
  const { room } = props;
  return (
    <RoomsWrapper>
      <Details details={room.description} />
      <Host />
      <Form {...props} />
      <Amenities amenities={room.amenities} />
      <Reviews />
      <GoogleMaps />
    </RoomsWrapper>
  );
}

export default compose (
  graphql(Query, {
    options: (props: RouterProps) => {
      let id = props.location.pathname.split('/');
      id = id[id.length - 1];
      return { variables: { listingId: id } };
    },
    props: ({ data: {
      loading,
      error,
      room
    } }: any) => {
      if (loading) return { loading };
      if (error) return { error };
      return { loading, error, room };
    }
  })
)(Rooms);
