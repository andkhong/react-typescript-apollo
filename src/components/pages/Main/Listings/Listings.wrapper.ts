import styled from 'styled-components';

const ListingWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  @media (min-width: 440px) {
    grid-template-columns: auto auto auto;

    .card {
      height: 405px;
      width: 425px;
    }
  
  }

  .image-container {
    height: 200px;

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