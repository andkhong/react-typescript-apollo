import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { InitialDataQuery } from 'gqls/index';

import AsyncComponent from 'HOCs/Async';
import AuthenticatedRoute from 'HOCS/Auth';

import AuthenticationModal from 'components/Modals/Authentication/';
import Header from 'components/Header/';
import Help from 'components/Help';
import Legals from 'components/Legals/';
import Footer from 'components/Footer/';
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
            <Route path='/help' component={Help} />
            <Route path='/legal' component={Legals} />
            {/* Id Routes */}
            <Route path='/rooms/:roomsId' component={(props: any) => <AsyncComponent {...props} {...authPortalHandler} load={import(/* webpackChunkName: "Rooms"*/ './Rooms')} />} />
            <Route path='/homes/:homesId' component={(props: any) => <AsyncComponent {...props} load={import(/* webpackChunkName: "Homes"*/ './Homes')} />} />
            <Route path='/users/:usersId' component={(props: any) => <AsyncComponent {...props} load={import(/* webpackChunkName: "Users"*/ './Users')} />} />
            <Route path='/profile/:profileId' component={(props: any) => <AsyncComponent {...props} load={import(/* webpackChunkName: "Users"*/ './Profile')} />} />
            <AuthenticatedRoute path='/booking/:bookingId' component={(props: any) => <AsyncComponent {...props} load={import(/* webpackChunkName: "Booking"*/ './Booking')} />} />
            <Route component={() => <AsyncComponent load={import('./NoMatch')} />} />
          </Switch>
        <Footer />
      </>
    );
  }
};

export default compose(
  graphql(InitialDataQuery, {
    props: ({ data: { 
      loading,
      error,
      networkStatus,
      listings,
      homes,
      hosts
    }}: any) => {
      if (loading) return { loading };
      if (error) return { error };
      return { loading, networkStatus, listings, homes, hosts };
    }
  })
)(App);

