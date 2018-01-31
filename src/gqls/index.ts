import gql from 'graphql-tag';

export const InitialDataQuery = gql`
    query {
        getListings @client {
            listings @client
        },
        hosts @client,
        homes @client
    }
`;
