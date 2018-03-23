import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { queryRoom } from 'gqls/rooms/';

import RoomsWrapper from './Rooms.wrapper';

import About from './About/';
import Accommodations from './Accommodations/';
import Amenities from './Amenities/';
import Description from './Description/';
import Form from './Form/';
import Host from './Host/';
import Gallery from './Gallery/';
import Restrictions from './Restrictions/';

import Error from 'shared/Error';
import GoogleMaps from 'shared/GoogleMaps';
import Loading from 'shared/Loading';

import { RoomProps } from './interface';

const Rooms = (props: RoomProps) => {
  if (props.loading) return <Loading />;
  if (props.error) return <Error />;
  const { room } = props;
  const { accomodations, amenities, houseRules, lat, lng } = room;
  return (
    <RoomsWrapper>
      <Gallery {...room} />
      <Form {...props} />
      <Description {...room} />
      <Accommodations accomodations={accomodations} />
      <Host {...room} />
      <Amenities amenities={amenities} />
      <Restrictions houseRules={houseRules} />
      <About {...room} />
      <GoogleMaps lat={lat} lng={lng} />
    </RoomsWrapper>
  );
};

export default compose (
  graphql(queryRoom, {
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
