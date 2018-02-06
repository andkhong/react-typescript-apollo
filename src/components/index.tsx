import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { InitialDataQuery } from 'gqls/index';
import AsyncComponent from 'HOCs/Async';
import AuthRoute from 'HOCS/Auth';
import PrivateRoute from 'HOCS/Private';
import Header from 'components/Header/';
import Footer from 'components/Footer/';
import AuthenticationModal from 'components/Modals/Authentication/';
import 'styled';
import { Props, State, RouterProps } from './interface';

class App extends React.Component<Props, State> {
  state = { authPortal: false, form: '' };
  
  closeAuthPortal = () => this.setState({ authPortal: false });
  toggleAuthForms = (form: string) => this.setState({ authPortal: true, form });

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
            <Route exact path='/' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Main')} />} />
            {/* Authenticated Route; if authenticated, user cannot revist forms and will be redirected back to main page */}
            <AuthRoute exact path='/login' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/Modals/Authentication/Login/')} />} />
            <AuthRoute exact path='/sign_up' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/Modals/Authentication/SignUp')} />} />
            <AuthRoute exact path='/reset_password' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/Modals/Authentication/ResetPassword')} />} />
            {/* Nested routes */}
            <Route path='/help' component={() => <AsyncComponent load={import('./Help')} />} />
            <Route path='/legal' component={() => <AsyncComponent load={import('./Legals')} />} />
            {/* Public Id Routes */}
            <Route exact path='/homes/:homesId' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Homes')} />} />
            <Route exact path='/rooms/:roomsId' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Rooms')} />} />
            <Route exact path='/users/:usersId' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Users')} />} />
            {/* Private & Nested Routes */}
            <PrivateRoute exact path='/accounts' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Accounts')} />} />
            <PrivateRoute exact path='/bookings' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Bookings')} />} />
            <PrivateRoute exact path='/hosts' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Hosts')} />} />
            <PrivateRoute exact path='/profiles' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Profiles')} />} />
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

// export default App;