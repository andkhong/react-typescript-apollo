import * as React from 'react';
import { Link } from 'react-router-dom';
import UnauthorizedWrapper from './Unauthorized.wrapper';
import ClearButtonWrapper from 'styled/Buttons/Clear';

interface Props {
  toggleAuthForms: (form: string) => void;
}

class Unauthorized extends React.Component<Props, {}> {
  showLogin = () => this.props.toggleAuthForms('Login')
  showSignUp = () => this.props.toggleAuthForms('SignUp')
  render() {
    return (
      <UnauthorizedWrapper>
        <Link to="/help"> Help </Link>
        <div onClick={this.showLogin}> 
          Log In
        </div>
        <ClearButtonWrapper className="btn">
          <button onClick={this.showSignUp}> Sign Up </button>
        </ClearButtonWrapper>
      </UnauthorizedWrapper>
    );
  }
};

export default Unauthorized;