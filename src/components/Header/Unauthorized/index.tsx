import * as React from 'react';

import SignUpButton from 'styled/Buttons/SignUp';
import { Props } from '../interface';

class Unauthorized extends React.Component<Props, {}> {
  showLogin = () => this.props.toggleAuthForms('Login')
  showSignUp = () => this.props.toggleAuthForms('SignUp')
  render() {
    return (
      <>
        <SignUpButton onClick={this.showSignUp}> Sign Up </SignUpButton>
        <SignUpButton onClick={this.showLogin}> Log In </SignUpButton>
      </>
    );
  }
};

export default Unauthorized;