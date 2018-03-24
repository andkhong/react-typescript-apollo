import styled from 'styled-components';

interface Props {
  isTop: boolean;
}

const HeaderWrapper = styled.div`
  position: fixed;
  box-sizing: border-box;
  padding: 0 80px;
  width: 100vw;
  display: flex;
  height: 64px;
  top: 0;
  overflow-y: scroll;
  background-color: #455a64;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  background-color: ${({ isTop }: Props) => isTop ? 'rgba(69, 90, 100, 0)' : '#455A64'};

  .left-container {
    float: left;
    .svg-container {
      color: #FFC107;
      width: 140px;
      @media (min-width: 768px) {
        width: 168px;
      }
    }
  }

  .right-container {
    float: right;
    align-items: center;
    display: flex;
  }
`;

export default HeaderWrapper;