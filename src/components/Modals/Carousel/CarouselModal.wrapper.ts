import styled from 'styled-components';

const CarouselModalWrapper = styled.div`
  .background-container {
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  .carousel-container {
    position: absolute;
    height: 300px;
    width: 300px;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;

    margin: auto;
  }
`;

export default CarouselModalWrapper;