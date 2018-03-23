import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: fixed;
  height: 70px;
  justify-content: center;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #eceff1;
  text-align: center;

  .left-container {
    float: left;
    display: flex;
    .svg-container {
      color: #455A64;
      height: 20px;
      width: 120px;
    }
    .copyright {
      font-weight: 300;
      color: #fff;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
    }
  }

  .right-container {
    display: none;
    float: right;
    .social-media-container {
      color: #455A64;
      height: 24px;
      width: 24px;
    }
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export default FooterWrapper;