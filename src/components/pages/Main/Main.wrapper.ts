import styled from 'styled-components';

const MainWrapper = styled.div`
  display: block;
  min-height: 100vh;
  
  .title-container {
    height: 292px;

    @media (min-width: 768px) {
      height: 424px;
    }
  }

  .listing-container {
  }

`;

export default MainWrapper;