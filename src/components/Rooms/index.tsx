import * as React from 'react';

import RoomsWrapper from 'styled/Wrappers/Rooms';
import Details from 'components/Rooms/Details/';
import Host from 'components/Rooms/Host/';
import Form from 'components/Rooms/Form/';
import Reviews from 'components/Rooms/Reviews/';
import GoogleMaps from 'shared/GoogleMaps';

const Rooms = (props: any) => (
  <RoomsWrapper>
    <Details />
    <Host />
    <Form {...props} />
    <Reviews />
    <GoogleMaps />
  </RoomsWrapper>
);

export default Rooms;