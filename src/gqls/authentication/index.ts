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
        error,
        success,
        token,
        userId
    }
  }
`;

export const SignUpUser = gql`
  mutation {
    signUpUser (input: {
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      password: $password
    }) @rest (
        type: User,
        path: "users/",
        method: "POST"
      ) {
        error,
    }
  }
`;

export const ResetUserPassword = gql`
  mutation {
    resetUserPassword (input: {
      email: $email
    }) @rest (
        type: User,
        path: "users/start_forgot_password",
        method: "POST"
      ) {
        error,
    }
  }
`;