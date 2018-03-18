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
import App from './components/App';
import { InitialState, resolvers } from './defaults';
import { injectGoogleMaps } from 'utils/gAPI';
injectGoogleMaps('AIzaSyB7DfwQwnhYjPzx8UIF0JHlgVeNwSDnZkY');

// Declare Apollo Client settings, default state management
const cache = new InMemoryCache();
const headersLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: window.localStorage.getItem('bee-token') || null,
      'content-type': 'application/json'
    }
  })
);
const stateLink = withClientState({ cache, resolvers, defaults: InitialState });
const restLink = new RestLink({ uri: "http://localhost:3000/beenest/v1/" });
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    headersLink,
    stateLink,
    restLink
  ])
});

// // Web3 Code
// // Metamask automatically injects Web3 into the global window object
// // therefore, reducing the need to including it into the app
// // We must set the provider
// declare global { interface Window extends Web3 {} };
// interface Web3 {
//   Web3: any;
// }
// if (window.Web3) {
//   const { Web3 } = window;
//   let web3 = new Web3(Web3.currentProvider);
// }
// // 

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={createBrowserHistory()}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
