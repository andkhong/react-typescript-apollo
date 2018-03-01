import styled from 'styled-components';

const ListingWrapper = styled.div`
  margin: auto;
  
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;

  max-height: 550px;
  max-width: 320px;

  a {
    text-decoration: none;
    color: black;
  }

  img {
    max-height: 550px;
    max-width: 320px;
  }

  .city {
    text-transform: capitalize;
  }
  .country {
    text-transform: uppercase;
  }
`;

export default ListingWrapper