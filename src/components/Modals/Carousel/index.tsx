import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CarouselWrapper from 'styled/Wrappers/Modals/CarouselWrapper';
import FormWrapper from 'styled/Wrappers/Form';

import Carousel from 'shared/Carousel';

class CarouselModal extends React.Component<any ,{}> {
  container = document.createElement('div') as HTMLDivElement;
  modalRoot = document.getElementById('modal-root') as any;

  componentDidMount() {
    this.modalRoot.append(this.container);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.container);
  }

  render(){
    return ReactDOM.createPortal(
      <>
        <CarouselWrapper onClick={this.props.toggleCarousel} />
        <FormWrapper>
          <Carousel initialPic={this.props.initialPic} photos={this.props.photos} />
        </FormWrapper>
      </>,
      this.container
    );
  }
}

export default CarouselModal;