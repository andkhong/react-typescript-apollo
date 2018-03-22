import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: fixed;
  height: 70px;
  justify-content: center;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #455a64;
  text-align: center;

  .left {
    float: left;
    display: flex;
    .copyright {
      font-weight: 300;
      color: #fff;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
    }
  }

  .right {
    float: right;
  }

  .svg-container {
    fill: greenyellow;
    height: 200px;
    width: 200px;
  }

`;

export default FooterWrapper;