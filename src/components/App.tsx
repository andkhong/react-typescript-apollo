import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { compose } from 'react-apollo';
import 'styled/globalStyledSheet';
import AsyncComponent from 'HOCs/Async';
import AuthRoute from 'HOCS/Auth';
import PrivateRoute from 'HOCS/Private';
import AuthenticationModal from 'components/Modals/Authentication/';
import Header from 'components/Header/';
import Footer from 'components/Footer/';
import { Props, State, Location, RouterProps } from './interface';

class App extends React.Component<Props, State> {
  state = { 
    authPortal: false, 
    isMobile: (window.innerWidth < 768) 
  };
  form: string = '';
  previousLocation: Location;

  componentWillMount() {
    window.removeEventListener("resize", this.handleMobile);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleMobile);
  }

  componentWillReceiveProps() { // Destory modal upon back button
    if (this.state.authPortal) {
      this.state.authPortal = false; // Syntax is fine
    }
  }

  componentWillUpdate(nextProps: Props) { // Add Google Analytics here
    if (nextProps.history.action !== 'POP') {
      this.previousLocation = this.props.location;
      // location is current route
    }
  }

  render() {
    const { authPortal, isMobile } = this.state;
    const authPortalHandler = {
      form: this.form,
      toggleAuthForms: this.toggleAuthForms,
      toggleAuthPortal: this.toggleAuthPortal
    };
    return (
      <>
        <Header toggleAuthForms={this.toggleAuthForms} />
        {authPortal && <AuthenticationModal {...authPortalHandler} />}
        <div className="main-content">
          <Switch>
            <Route exact path='/' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/pages/Main')} />} />
            {/* Nested routes */}
            <Route path='/help' component={() => <AsyncComponent load={import('components/pages/Help')} />} />
            <Route path='/legal' component={() => <AsyncComponent load={import('components/pages/Legals')} />} />
            {/* Public Id Routes */}
            <Route exact path='/homes/:id' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/pages/Homes')} />} />
            <Route exact path='/rooms/:id' component={(props: RouterProps) => <AsyncComponent {...props} load={import('components/pages/Rooms')} toggleAuthForms={this.toggleAuthForms} />} />
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
        </div>
        <Footer isMobile={isMobile} />
      </>
    );
  }

  toggleAuthPortal = (): void => this.setState({ authPortal: !this.state.authPortal });
  toggleAuthForms = (form: string): void => {
    this.form = form;
    return this.setState({ authPortal: true });
  };
  handleMobile = () => {
    const isMobile = window.innerWidth < 768;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  };

};

export default withRouter(compose()(App));