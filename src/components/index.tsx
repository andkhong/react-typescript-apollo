import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
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
  state = { authPortal: false };
  form: string = '';

  componentWillReceiveProps() {
    if (this.state.authPortal) {
      this.state = Object.assign(this.state, {
        authPortal: false
      });
    }
  }

  render() {
    const authPortalHandler = {
      toggleAuthPortal: this.toggleAuthPortal,
      toggleAuthForms: this.toggleAuthForms
    };
    return (
      <>
        <Header {...authPortalHandler} />
          {this.state.authPortal && <AuthenticationModal {...authPortalHandler} form={this.form} />}
          <Switch>
            <Route exact path='/' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Main')} />} />
            {/* Nested routes */}
            <Route path='/help' component={() => <AsyncComponent load={import('./Help')} />} />
            <Route path='/legal' component={() => <AsyncComponent load={import('./Legals')} />} />
            {/* Public Id Routes */}
            <Route exact path='/homes/:id' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Homes')} />} />
            <Route exact path='/rooms/:id' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Rooms')} {...authPortalHandler} />} />
            <Route exact path='/users/:id' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Users')} />} />
            {/* Private & Nested Routes */}
            <PrivateRoute path='/accounts' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Accounts')} />} />
            <PrivateRoute path='/bookings' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Bookings')} />} />
            <PrivateRoute path='/hosts' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Hosts')} />} />
            {/* Authenticated Route; if authenticated, user cannot revist forms and will be redirected back to main page */}
            <AuthRoute exact path='/login' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/Login/')} />} />
            <AuthRoute exact path='/sign_up' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/SignUp')} />} />
            <AuthRoute exact path='/reset_password' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/ResetPassword')} />} />
            <AuthRoute exact path='/verify_password' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/VerifyPassword')} />} />
            <Route component={() => <AsyncComponent load={import('./NoMatch')} />} />
          </Switch>
        <Footer />
      </>
    );
  }

  toggleAuthPortal = (): void => this.setState({ authPortal: !this.state.authPortal });
  toggleAuthForms = (form: string): void => {
    this.form = form;
    return this.setState({ authPortal: true });
  };
};

export default withRouter(compose()(App));
