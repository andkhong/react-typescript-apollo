import * as React from 'react';
import { Link } from 'react-router-dom';
import ClearButtonWrapper from 'styled/Buttons/Clear';

interface Props {
  toggleAuthForms: (form: string) => void;
}

class Unauthorized extends React.Component<Props, {}> {
  showLogin = () => this.props.toggleAuthForms('Login')
  showSignUp = () => this.props.toggleAuthForms('SignUp')
  render() {
    return (
      <>
        <Link to="/become_host"> Become a Host </Link>
        <Link to="/help"> Help </Link>
        <ClearButtonWrapper>
          <button onClick={this.showSignUp}> Sign Up </button>
        </ClearButtonWrapper>
        <ClearButtonWrapper>
          <button onClick={this.showLogin}> Log In </button>
        </ClearButtonWrapper>
      </>
    );
  }
};

export default Unauthorized;