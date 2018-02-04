import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { InitialDataQuery } from 'gqls/index';

import AsyncComponent from 'HOCs/Async';
import AuthenticatedRoute from 'HOCS/Auth';

import AuthenticationModal from 'components/Modals/Authentication/';
import Header from 'components/Header/';
import Footer from 'components/Footer/';

import 'styled';
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
            <Route exact path='/' component={(props: any) => <AsyncComponent {...props} load={import('./Main')} />} />
            {/* Nested routes */}
            <Route path='/help' component={(props: any) => <AsyncComponent {...props} load={import('./Help')} />} />
            <Route path='/legal' component={(props: any) => <AsyncComponent {...props} load={import('./Legals')} />} />
            {/* Id Routes */}
            <Route exact path='/rooms/:roomsId' component={(props: any) => <AsyncComponent {...props} {...authPortalHandler} load={import('./Rooms')} />} />
            <Route exact path='/homes/:homesId' component={(props: any) => <AsyncComponent {...props} load={import('./Homes')} />} />
            <Route exact path='/users/:usersId' component={(props: any) => <AsyncComponent {...props} load={import('./Users')} />} />
            <Route exact path='/profile/:profileId' component={(props: any) => <AsyncComponent {...props} load={import('./Profile')} />} />
            <AuthenticatedRoute exact path='/bookings' component={(props: any) => <AsyncComponent {...props} load={import('./Booking')} />} />
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
