import * as React from 'react';
import GalleryWrapper from './Gallery.wrapper';
import CarouselModal from 'components/Modals/Carousel/';

interface Props {
  listingPicUrl: string;
  photos: string[];
}

interface State {
  carouselPortal: boolean;
}

class Gallery extends React.Component<Props, State> {
  state = { carouselPortal: false };
  toggleCarousel = () => this.setState({ carouselPortal: !this.state.carouselPortal });

  render() {
    const { carouselPortal } = this.state;
    const { listingPicUrl, photos } = this.props;
    return (
      <GalleryWrapper>
        <button onClick={this.toggleCarousel}> Show More </button>
        <img 
          className="image" 
          src={listingPicUrl}
          onClick={this.toggleCarousel}
        />
        {carouselPortal &&
          <CarouselModal
            initialPic={listingPicUrl}
            photos={photos}
            toggleCarousel={this.toggleCarousel}
          />
        }
      </GalleryWrapper>
    );
  }
};

export default Gallery;

