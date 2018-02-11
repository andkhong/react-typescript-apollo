// React + React Rendering Engine
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// React Routing Library
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Apollo for GraphQL Client communication and State Management
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
// import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { RestLink } from 'apollo-link-rest';

// Import dependencies/modules
import App from './components/';
import { defaults, resolvers } from './defaults';

// Declare Apollo Client settings, default state management
const cache = new InMemoryCache();
const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${window.localStorage.getItem('bee-token') || null}`
    }
  })
);
const stateLink = withClientState({ cache, resolvers, defaults });
const restLink = new RestLink({ 
  uri: "http://localhost:3000/beenest/v1/",
  credentials: 'same-origin'
});
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    authLink,
    stateLink,
    restLink
  ])
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
