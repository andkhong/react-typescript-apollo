import styled from 'styled-components';

const CarouselWrapper = styled.div`
  margin: 0 auto;
  height: 540px;
  width: 960px;
  
  div {
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }

`;

export default CarouselWrapper;