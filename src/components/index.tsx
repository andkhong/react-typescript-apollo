import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { graphql, compose } from 'react-apollo';
// import { InitialDataQuery } from 'gqls/index';

import AsyncComponent from 'HOCs/Async';
import AuthenticationModal from 'components/Modals/Authentication/';
import Header from './Header/';
import Footer from './Footer/';
import { Props, State } from './interface';

class App extends React.Component<Props, State> {
  state = { authPortal: false, form: '' }

  closeAuthPortal = () => this.setState({ authPortal: false })
  toggleAuthForms = (form: string) => this.setState({ authPortal: true, form })

  render() {
    const authPortalHandler = {
      closeAuthPortal: this.closeAuthPortal,
      toggleAuthForms: this.toggleAuthForms
    };
    return (
      <>
        <Header {...authPortalHandler} />
        {this.state.authPortal && <AuthenticationModal {...this.state} {...authPortalHandler} />}
        <Switch>
          <Route exact path='/' component={(props: any) => <AsyncComponent {...props} load={import(/* webpackChunkName: "Main"*/ './Main')} />} />
          {/* Nested routes */}
          <Route path='/help' component={(props: any) => <AsyncComponent {...props} load={import(/* webpackChunkName: "Help"*/ './Help')} />} />
          <Route path='/terms' component={(props: any) => <AsyncComponent {...props} load={import(/* webpackChunkName: "Terms"*/ './Terms')} />} />
          {/* IDed routes */}
          <Route path='/rooms' component={(props: any) => <AsyncComponent {...props} {...authPortalHandler} load={import(/* webpackChunkName: "Rooms"*/ './Rooms')} />} />
          <Route path='/users' component={(props: any) => <AsyncComponent {...props} load={import(/* webpackChunkName: "Users"*/ './Users')} />} />
          <Route path='/homes' component={(props: any) => <AsyncComponent {...props} load={import(/* webpackChunkName: "Homes"*/ './Homes')} />} />
          {/* Authenticated IDed Routes */}
          <Route path='/booking' component={(props: any) => <AsyncComponent {...props} load={import(/* webpackChunkName: "Booking"*/ './Booking')} />} />
          {/* No Match must be at the bottom of the switch mapping */}
          <Route component={() => <AsyncComponent load={import('./NoMatch')} />} />
        </Switch>
        <Footer />
      </>
    );
  }
};

// export default compose(
//   graphql(InitialDataQuery, {
//     props: (prop: any) => {
//       console.log('this is query', prop)

//     }
//     // ({
//     //   client: {
//     //     listings: data.listings,
//     //     hosts: data.hosts,
//     //     homes: data.homes
//     //   }
//     // })
//   })
// )(App);

export default App;
