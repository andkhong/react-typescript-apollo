import styled from 'styled-components';

const TitleWrapper = styled.div`
  background-size: cover;
  background-image: url(${require('assets/img/hero-image.jpg')});
  height: 100%;
  width: 100%;
  max-width: 100vw;
  left: 0;
  
  .text-container {
    color: #fff;
    h1 {
      margin: 0;
      font-weight: 500;
      font-size: 68px;
      line-height: 68px;
    }
    p {
      font-weight: 300;
      font-size: 24px;
      line-height: 28px;
    }
  }

`;


export default TitleWrapper;