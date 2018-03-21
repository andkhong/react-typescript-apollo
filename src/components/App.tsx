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
  previousLocation: any;

  componentWillUpdate(nextProps: Props) { // Add Google Analytics here
    if (nextProps.history.action !== 'POP') {
      this.previousLocation = this.props.location;
      // this.props.location is previous route
      // location is current route
    }
  }

  componentWillReceiveProps() { // Destory modal upon back button
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
            <Route exact path='/' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/pages/Main')} />} />
            {/* Nested routes */}
            <Route path='/help' component={() => <AsyncComponent load={import('components/pages/Help')} />} />
            <Route path='/legal' component={() => <AsyncComponent load={import('components/pages/Legals')} />} />
            {/* Public Id Routes */}
            <Route exact path='/homes/:id' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/pages/Homes')} />} />
            <Route exact path='/rooms/:id' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/pages/Rooms')} {...authPortalHandler} />} />
            <Route exact path='/users/:id' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/pages/Users')} />} />
            {/* Private & Nested Routes */}
            <PrivateRoute path='/accounts' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/pages/Accounts')} />} />
            <PrivateRoute path='/hosts' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/pages/Hosts')} />} />
            <PrivateRoute path='/payment' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/pages/Payment')} />} />
            {/* Authenticated Route; if authenticated, user cannot revist forms and will be redirected back to main page */}
            <AuthRoute exact path='/login' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/Login/')} />} />
            <AuthRoute exact path='/reset_password' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/ResetPassword')} />} />
            <AuthRoute exact path='/sign_up' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/SignUp')} />} />
            <AuthRoute exact path='/verify_password' component={(props: RouterProps) => <AsyncComponent {...props} load={import('./Authentication/VerifyPassword')} />} />
            <Route component={() => <AsyncComponent load={import('components/pages/NoMatch')} />} />
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
