import styled from 'styled-components';

const CarouselModalWrapper = styled.div`
  .background-container {
    background-color: rgba(236, 239, 241, 0.9);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5;
  }

  .carousel-container {
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
`;

export default CarouselModalWrapper;