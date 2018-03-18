import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CarouselModalWrapper from './CarouselModal.wrapper';
import Carousel from 'shared/Carousel';

interface Props {
  initialPic: string;
  photos: string[];
  toggleCarousel: () => void;
}

class CarouselModal extends React.Component<Props ,{}> {
  container = document.createElement('div') as HTMLDivElement;
  modalRoot = document.getElementById('modal-root') as HTMLElement;

  componentDidMount() {
    this.modalRoot.appendChild(this.container);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.container);
  }

  render(){
    return ReactDOM.createPortal(
      <CarouselModalWrapper>
        <div className="close" onClick={this.props.toggleCarousel} />
        <div className="form">
          <Carousel initialPic={this.props.initialPic} photos={this.props.photos} />
        </div>
      </CarouselModalWrapper>,
      this.container
    );
  }
}

export default CarouselModal;