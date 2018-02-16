import gql from 'graphql-tag';

export const QueryInitialState = gql`
  query {
    locale,
    languages,
    userAgent
  }
`;
