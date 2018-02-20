import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AuthenticationModalWrapper from 'styled/Wrappers/AuthenticationModal';
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
    console.log('this ist he props', this.props);
    return ReactDOM.createPortal(
      <>
        <AuthenticationModalWrapper onClick={this.props.toggleCarousel} />
        <FormWrapper>
          <Carousel initialPic={this.props.initialPic} />
        </FormWrapper>
      </>,
      this.container
    );
  }
}

export default CarouselModal;