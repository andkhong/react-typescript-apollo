import styled from 'styled-components';

const ListingWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 66px;
  
  @media (min-width: 768px) {
    grid-template-columns: auto auto auto;
    .card-container {
      height: 378px;
      width: 282px;
      margin: 0 auto;
    }
  }

  .image-container {
    height: 210px;
    width: 400px;
    @media (min-width: 768px) {
      height: 210px;
      width: 100%;
    }
    img {
      height: 100%;
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  .city {
    text-transform: capitalize;
  }

  .country {
    text-transform: uppercase;
  }
`;

export default ListingWrapper