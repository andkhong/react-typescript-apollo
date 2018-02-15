import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { Query } from 'gqls/rooms/index';
import RoomsWrapper from 'styled/Wrappers/Rooms';

// import InjectAsyncScript from 'HOCs/Inject';
import Details from 'components/Rooms/Details/';
import Host from 'components/Rooms/Host/';
import Form from 'components/Rooms/Form/';
import Reviews from 'components/Rooms/Reviews/';
import GoogleMaps from 'shared/GoogleMaps';

// import { RoomProps } from './interface';
import { RouterProps } from 'components/interface';

const Rooms = (props: any) => (
  <RoomsWrapper>
    {props.room && <Details details={props.room.description} />}
    <Host />
    <Form {...props} />
    <Reviews />
    {/* <InjectAsyncScript 
      library='https://maps.googleapis.com/maps/api/js?key='
      apiKey='AIzaSyB6Ve610cTdsIvh7-izrqV4_3ooXqPhY-U&'
      component={GoogleMaps}
    /> */}
    <GoogleMaps />
  </RoomsWrapper>
);

export default compose (
  graphql(Query, {
    options: (props: RouterProps) => {
      let id = props.location.pathname.split('/');
      return { 
        variables: { 
          listingId: id[id.length - 1]
        } 
      }
    },
    props: ({ data: {
      loading,
      error,
      room
    } }: any) => {
      if (loading) {
        return { loading };
      }
      if (error) {
        return { error };
      }
      return { loading, error, room };
    }
  })
)(Rooms);
