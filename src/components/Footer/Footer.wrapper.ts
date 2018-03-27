import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: block;
  height: 70px;
  padding: 1rem;
  background-color: #eceff1;

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
    float: right;
  }
`;

export default FooterWrapper;