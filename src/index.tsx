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
import { HttpLink } from 'apollo-link-http';
// import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';

// Import dependencies/modules
import App from './components/';
import { defaults, resolvers } from './defaults';

// Declare Apollo Client settings, default state management
const cache = new InMemoryCache();
const stateLink = withClientState({ 
  cache, 
  resolvers, 
  defaults 
});
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('token');
//   return {
//     headers: {
//       ...headers
//     }
//   }
// });

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink,
    new HttpLink({ uri: "/graphql" })
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

// if (process.env.NODE_ENV === 'production') {
//   const runtime = require('offline-plugin/runtime');
//   runtime.install({
//     onUpdateReady() {
//       runtime.applyUpdate();
//     },
//     onUpdated() {
//       window.location.reload();
//     },
//   });
// }