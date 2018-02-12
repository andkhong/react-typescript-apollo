import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'react-apollo';
import 'styled';
import AsyncComponent from 'HOCs/Async';
import AuthRoute from 'HOCS/Auth';
import PrivateRoute from 'HOCS/Private';
import AuthenticationModal from 'components/Modals/Authentication/';
import Header from 'components/Header/';
import Footer from 'components/Footer/';
import { Props, State, RouterProps } from './interface';

class App extends React.Component<Props, State> {
  state = { authPortal: false, form: '' };

  closeAuthPortal = (): void => this.setState({ authPortal: false });
  toggleAuthForms = (form: string): void => this.setState({ authPortal: true, form });

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
            {/* Nested routes */}
            <Route path='/help' component={() => <AsyncComponent load={import('./Help')} />} />
            <Route path='/legal' component={() => <AsyncComponent load={import('./Legals')} />} />
            {/* Public Id Routes */}
            <Route exact path='/homes/:homesId' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Homes')} />} />
            <Route exact path='/rooms/:roomsId' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Rooms')} />} />
            <Route exact path='/users/:usersId' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Users')} />} />
            {/* Private & Nested Routes */}
            <PrivateRoute path='/accounts' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Accounts')} />} />
            <PrivateRoute path='/bookings' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Bookings')} />} />
            <PrivateRoute path='/hosts' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Hosts')} />} />
            <PrivateRoute path='/profiles' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Profiles')} />} />
            {/* Authenticated Route; if authenticated, user cannot revist forms and will be redirected back to main page */}
            <AuthRoute exact path='/login' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/Login/')} />} />
            <AuthRoute exact path='/sign_up' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/SignUp')} />} />
            <AuthRoute exact path='/reset_password' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/ResetPassword')} />} />
            <Route component={() => <AsyncComponent load={import('./NoMatch')} />} />
          </Switch>
        <Footer />
      </>
    );
  }
};

export default compose()(App);

