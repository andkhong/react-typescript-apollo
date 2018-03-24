import * as React from 'react';
import GalleryWrapper from './Gallery.wrapper';
import CarouselModal from 'components/Modals/Carousel/';
import DefaultButtonWrapper from 'styled/Buttons/Default';
import Svg from 'shared/Svg';

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
      <GalleryWrapper src={listingPicUrl}>
        <div className="image-container">
          <div className="img" />
          <DefaultButtonWrapper className="btn"> 
            <button onClick={this.toggleCarousel}>
              <div className="text">View Photos</div>
              <Svg className="camera" src="camera" />
            </button>
          </DefaultButtonWrapper>
        </div>
        {carouselPortal &&
          <CarouselModal
            photos={photos}
            initialPic={listingPicUrl}
            toggleCarousel={this.toggleCarousel}
          />
        }
      </GalleryWrapper>
    );
  }
};

export default Gallery;

