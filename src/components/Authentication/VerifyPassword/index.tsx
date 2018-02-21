import * as React from 'react';
import { isEmailValid, isPasswordValid } from 'utils/formValidation';
import { FormProps, VerificationPasswordState } from '../interface';

class VerifyPassword extends React.Component<FormProps, VerificationPasswordState> {
  state = {
    email: '',
    emailError: false,
    verificationCode: '',
    verificationCodeError: false,
    password: '',
    passwordError: false,
    isDisabled: false,
    error: false,
    errorInfo: '',
  }

  // Email Form
  handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 
      email: event.currentTarget.value,
      emailError: !isEmailValid(event.currentTarget.value)
    });
  }

  handleVerification = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 
      verificationCode: event.currentTarget.value,
      verificationCodeError: event.currentTarget.value.length < 1
    });
  }


      // Password Form
  handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 
      password: event.currentTarget.value,
      passwordError: !isPasswordValid(event.currentTarget.value)
    });
  }

  verifyPassword = (event:  React.FormEvent<EventTarget>) => {
    event.preventDefault();
    this.props.history.push('/');
  }

  render(){
    const { emailError, verificationCodeError, passwordError, isDisabled } = this.state;
    const { email, verificationCode, password } = this.state;
    return (
      <div>
         <form onSubmit={this.verifyPassword}>
          <input
            placeholder="Email address"
            type="email"
            value={email}
            onChange={this.handleEmail}
            required
          />
          {emailError && <div> Email Error </div>}
          <input
            placeholder="Verification Code"
            type="text"
            value={verificationCode}
            onChange={this.handleVerification}
            required
          />     
          {verificationCodeError && <div> Verification Code Error </div>}
          <input
            placeholder="Enter New Password"
            type="password"
            value={password}
            onChange={this.handlePassword}
            required
          />
          {passwordError && <div> Password Error </div>}
          <button disabled={isDisabled}>Reset Password</button>
        </form>
      </div>
    )
  }
}

export default VerifyPassword;