import * as React from 'react';
import Button from 'styled/Buttons/Form';
import { FormProps, SignUpState } from '../interface';

class SignUp extends React.Component<FormProps, SignUpState> {
  static defaultProps = {
    switchToLogin: () => window.location.href = '/login',
  }

  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  }

  // Email Form
  handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: e.currentTarget.value });
  }

  // First Name Form
  handleFirstName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ firstName: e.currentTarget.value });
  }

  // Last Name Form
  handleLastName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ lastName: e.currentTarget.value });
  }

  // Password Form
  handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ password: e.currentTarget.value });
  }

  SignUpUser = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  }

  render() {
    const { email, firstName, lastName, password } = this.state;
    const { switchToLogin } = this.props;
    return (
      <div>
        <form onSubmit={this.SignUpUser}>
          <input
            placeholder="Email address"
            name="email"
            type="email"
            value={email}
            onChange={this.handleEmail}
          />
          <input
            placeholder="First name"
            name="firstName"
            type="text"
            value={firstName}
            onChange={this.handleFirstName}
          />
          <input
            placeholder="Last name"
            name="lastName"
            type="text"
            value={lastName}
            onChange={this.handleLastName}
          />          
          <input
            placeholder="Create a Password"
            name="password"
            type="password"
            value={password}
            onChange={this.handlePassword}
          />
          <Button>Sign Up</Button>
        </form>
        <div> 
          <p>Already have an Beenest account?</p>
          <p onClick={switchToLogin}> Log in </p>
        </div>
      </div>
    );
  }
}

export default SignUp;
