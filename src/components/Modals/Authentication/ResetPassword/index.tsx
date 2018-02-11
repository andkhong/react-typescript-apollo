import * as React from 'react';
import { isEmailValid } from 'utils/formValidation';
import { FormProps, ResetPasswordState } from '../interface';

class ResetPassword extends React.Component<FormProps, ResetPasswordState> {
  static defaultProps = {
    switchToLogin: () => window.location.href = '/login',
  }

  state = {
    email: '',
    isDisabled: true,
    error: false,
    errorInfo: ''
  }

  // Email Form
  handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 
      email: e.currentTarget.value,
      isDisabled: !isEmailValid(e.currentTarget.value)
    });
  }

  sendPasswordEmail = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const { email } = this.state;
    console.log('this is the email', email);
  }

  render() {
    const { email, error, isDisabled, errorInfo } = this.state;
    const { switchToLogin } = this.props;
    return (
      <div>
        <form onSubmit={this.sendPasswordEmail}>
          <input
            type="email"
            onChange={this.handleEmail}
            value={email}
            required
          />
          {error && <div> {errorInfo} </div>}
          <button disabled={isDisabled} > Send Reset Link </button>
        </form>
        <div>
          <p onClick={switchToLogin}> Back to Login </p>
        </div>
      </div>
    )
  }
}

export default ResetPassword;