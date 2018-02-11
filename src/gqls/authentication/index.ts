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
        success,
        userId,
        token,
        error
    }
  }
`;

// export const SignUpUser = gql`
//   mutation {
//     signUpUser (input: {

//     }) @rest (

//       ) {

//     }
//   }
// `;

// export const ResetUserPassword = gql`
//   mutation {
//     resetUserPassword (input: {
//       email: $email
//     }) @rest (

//       ) {

//     }
//   }
// `;