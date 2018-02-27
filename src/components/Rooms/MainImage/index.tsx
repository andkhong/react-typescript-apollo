import * as React from 'react';

import CarouselModal from 'components/Modals/Carousel/';

// interface Props {
//   listingPicUrl: string;
//   photos: any;
// }

interface State {
  carouselPortal: boolean;
}

class MainImage extends React.Component<any, State> {
  state = { carouselPortal: false };
  toggleCarousel = () => this.setState({ carouselPortal: !this.state.carouselPortal });

  render() {
    const { carouselPortal } = this.state;
    const { listingPicUrl, photos } = this.props;
    return (
      <div>
        <button onClick={this.toggleCarousel}> Show More </button>
        <img src={listingPicUrl} />
        {carouselPortal &&
          <CarouselModal
            initialPic={listingPicUrl}
            photos={photos}
            toggleCarousel={this.toggleCarousel}
          />
        }
      </div>
    );
  }
};

export default MainImage;