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

  .left {
    float: left
  }

  .right {
    float: right;
    display: flex;
  }

  .svg-container {
    fill: orange;
    height: 200px;
    width: 200px;
  }
`;

export default HeaderWrapper;