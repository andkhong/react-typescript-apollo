import gql from 'graphql-tag';

export const FetchUser = gql`
  mutation {
    fetchUser (input: {
      email: $email,
      password: $password
    }) @rest (
        type: User,
        path: "login",
        method: "POST"
      ) {
        success
    }
  }
`;
