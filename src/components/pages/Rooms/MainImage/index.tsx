import * as React from 'react';

import CarouselModal from 'components/Modals/Carousel/';

interface Props {
  listingPicUrl: string;
  photos: string[];
}

interface State {
  carouselPortal: boolean;
}

class MainImage extends React.Component<Props, State> {
  state = { carouselPortal: false };
  toggleCarousel = () => this.setState({ carouselPortal: !this.state.carouselPortal });

  render() {
    const { carouselPortal } = this.state;
    const { listingPicUrl, photos } = this.props;
    return (
      <MainImageWrapper>
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
      </MainImageWrapper>
    );
  }
};

export default MainImage;

import styled from 'styled-components';

const MainImageWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 27.78vw;
  min-height: 400px;

  .image {
    height: 100%;
    width: 100%;
  }
`