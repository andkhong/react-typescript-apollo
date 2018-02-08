import gql from 'graphql-tag';

export const FetchLogin = gql`
    mutation fetchUser($email: String!, $password: String!) {
       fetchUser(email: $email, password: $password) {
           name
       }
    }
`;