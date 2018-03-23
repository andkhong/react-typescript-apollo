import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex-end;
  height: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  background-color: #455a64;
  text-align: center;

  .left-container {
    float: left;
    .svg-container {
      color: #FFC107;
      height: 60px;
      width: 140px;
      @media (min-width: 768px) {
        height: 200px;
        width: 200px;
      }
    }
  }

  .right-container {
    float: right;
    display: flex;
  }
`;

export default HeaderWrapper;