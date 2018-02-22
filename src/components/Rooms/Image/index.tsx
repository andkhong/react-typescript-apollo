import * as React from 'react';

import CarouselModal from 'components/Modals/Carousel/';

interface Props {
  listingPicUrl: string;
}

interface State {
  carouselPortal: boolean;
}

class Image extends React.Component<Props, State> {
  state = { carouselPortal: false };
  toggleCarousel = () => this.setState({ carouselPortal: !this.state.carouselPortal });

  render() {
    const { carouselPortal } = this.state;
    const { listingPicUrl } = this.props;
    return (
      <div>
        <img src={listingPicUrl} />
        {carouselPortal &&
          <CarouselModal
            initialPic={listingPicUrl}
            toggleCarousel={this.toggleCarousel}
          />
        }
        <button onClick={this.toggleCarousel}> Show More </button>
      </div>
    );
  }
}

export default Image;