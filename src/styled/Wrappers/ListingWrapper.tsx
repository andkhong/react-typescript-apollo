import styled from 'styled-components';

const ListingWrapper = styled.div`
    display: flex;
    justify-content: center;
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