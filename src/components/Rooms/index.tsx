import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { queryRooms } from 'gqls/rooms/';
import RoomsWrapper from 'styled/Wrappers/Rooms';
import About from './About/';
import Amenities from './Amenities/';
import Description from './Description/';
import Form from './Form/';
import Host from './Host/';
import MainImage from './MainImage/';
import Reviews from './Reviews/';
import GoogleMaps from 'shared/GoogleMaps';
import Loading from 'shared/Loading';
import { RoomProps } from './interface';

const Rooms = (props: RoomProps) => {
  if (props.loading) return <Loading />;
  const { room } = props;
  return (
    <RoomsWrapper>
      <MainImage {...room} />
      <Form {...props} maxGuests={room.maxGuests.toString()} datesBooked={room.datesBooked} />
      <Description {...room} />
      <Host {...room} />
      <Amenities amenities={room.amenities} />
      <About {...room} />
      <Reviews />
      <GoogleMaps lat={room.lat} lng={room.lng} />
    </RoomsWrapper>
  );
};

export default compose (
  graphql(queryRooms, {
    options: (props: RoomProps) =>  ({ 
      variables: { 
        listingId: props.match.params.id 
      } 
    }),
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
