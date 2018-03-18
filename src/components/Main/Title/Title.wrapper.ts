import styled from 'styled-components';
// const backgroundImage = require('assets/images/home/hero-placeholder.jpg');
// background-image: url(${backgroundImage});

const TitleWrapper = styled.div`
  display: block;
  background-size: cover;
  height: 400px;
  position: absolute;
  left: 0;
  padding: 0 24px 0 48px;

  h1 {
      position: relative;
      color: #fff;
      font-weight: 500;
      font-size: 68px;
      line-height: 68px;
  }

  p {
    font-weight: 300;
    color: #fff;
    font-size: 24px;
    line-height: 28px;
    margin-top: 48px;
  }

`;


export default TitleWrapper;