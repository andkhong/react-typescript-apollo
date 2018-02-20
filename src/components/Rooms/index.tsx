import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { Query } from 'gqls/rooms/';
import RoomsWrapper from 'styled/Wrappers/Rooms';
import Amenities from './Amenities';
import Details from './Details/';
import Host from './Host/';
// import Form from './Form/';
import Reviews from './Reviews/';
// import Carousel from 'shared/Carousel/';
import GoogleMaps from 'shared/GoogleMaps';
import Loading from 'shared/Loading';

// import { RoomProps } from './interface';
import { RouterProps } from 'components/interface';

// const Rooms = (props: any) => {
//   if (props.loading) return <Loading />;
//   const { room } = props;
//   console.log(room);
//   return (
//     <RoomsWrapper>
//       <Carousel initialPic={room.listingPicUrl} />
//       <Details details={room.description} />
//       <Host hostFirstName={room.hostFirstName} />
//       <Form {...props} />
//       <Amenities amenities={room.amenities} />
//       <Reviews />
//       <GoogleMaps />
//     </RoomsWrapper>
//   );
// }

import CarouselModal from 'components/Modals/Carousel/';

class Rooms extends React.Component<any, {}> {
  state = { carouselPortal: false };
  toggleCarousel = () => this.setState({ carouselPortal: !this.state.carouselPortal });

  render() {
    if (this.props.loading) return <Loading />;
    const { carouselPortal } = this.state;
    const { room } = this.props;
    return (
      <RoomsWrapper>
        {carouselPortal && <CarouselModal initialPic={room.listingPicUrl} toggleCarousel={this.toggleCarousel} />}
        <div>
          <img
            onClick={this.toggleCarousel}
            src={room.listingPicUrl}
          />
        </div>
        <Details details={room.description} />
        <Host hostFirstName={room.hostFirstName} />
        {/* <Form {...this.props} /> */}
        <Amenities amenities={room.amenities} />
        <Reviews />
        <GoogleMaps />
      </RoomsWrapper>
    );
  }
}

export default compose (
  graphql(Query, {
    options: (props: RouterProps) =>  ({ 
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
