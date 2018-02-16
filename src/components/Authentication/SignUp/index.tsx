import * as React from 'react';
import { compose, graphql } from 'react-apollo';
import { SignUpUser } from 'gqls/authentication/';
import Button from 'styled/Buttons/Form';
import { isEmailValid, isPasswordValid, isFirstNameValid, isLastNameValid } from 'utils/formValidation';
import { FormProps, SignUpState } from '../interface';

class SignUp extends React.Component<FormProps, SignUpState> {
  static defaultProps = {
    switchToLogin: () => location.replace('/login'),
  }

  state = {
    email: '',
    emailError: false,
    firstName: '',
    firstNameError: false,
    lastName: '',
    lastNameError: false,
    password: '',
    passwordError: false,
    isDisabled: false,
    error: false,
    errorInfo: ''
  }

  // Email Form
  handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 
      email: e.currentTarget.value,
      emailError: !isEmailValid(e.currentTarget.value)
    });
  }

  // First Name Form
  handleFirstName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 
      firstName: e.currentTarget.value,
      firstNameError: !isFirstNameValid(e.currentTarget.value)
    });
  }

  // Last Name Form
  handleLastName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 
      lastName: e.currentTarget.value,
      lastNameError: !isLastNameValid(e.currentTarget.value)
    });
  }

  // Password Form
  handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 
      password: e.currentTarget.value,
      passwordError: !isPasswordValid(e.currentTarget.value)
    });
  }

  SignUpUser = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    this.setState({ isDisabled: true });
    const { email, firstName, lastName, password } = this.state;
    this.props.signUpUser(email, firstName, lastName, password)
      .then((res: any) => {
        console.log('this is the res', res)
      });
    this.setState({ isDisabled: false });
  }

  render() {
    const { emailError, firstNameError, lastNameError, passwordError } = this.state;
    const { email, firstName, lastName, password, isDisabled } = this.state;
    return (
      <div>
        <form onSubmit={this.SignUpUser}>
          <input
            placeholder="Email address"
            type="email"
            value={email}
            onChange={this.handleEmail}
            required
          />
          {emailError && <div> Email Error </div>}
          <input
            placeholder="First name"
            type="text"
            value={firstName}
            onChange={this.handleFirstName}
            required
          />
          {firstNameError && <div> First Name Error </div>}
          <input
            placeholder="Last name"
            type="text"
            value={lastName}
            onChange={this.handleLastName}
            required
          />     
          {lastNameError && <div> Last Name Error </div>}
          <input
            placeholder="Create a Password"
            type="password"
            value={password}
            onChange={this.handlePassword}
            required
          />
          {passwordError && <div> Password Error </div>}
          <Button disabled={isDisabled} >Sign Up</Button>
        </form>
        <div> 
          <p>Already have an Beenest account?</p>
          <p onClick={this.props.switchToLogin}> Log in </p>
        </div>
      </div>
    );
  }
}

export default compose(
  graphql(SignUpUser, {
    props: ({ mutate }: any) => ({
      signUpUser: (email: string, firstName: string, lastName: string, password: string) => (
        mutate({ variables: { email, firstName, lastName, password } })
      )
    })
  })
)(SignUp);