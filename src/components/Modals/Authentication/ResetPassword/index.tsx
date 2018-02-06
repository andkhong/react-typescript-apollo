import * as React from 'react';
import { FormProps, ResetPasswordState } from '../interface';

class ResetPassword extends React.Component<FormProps, ResetPasswordState> {
  static defaultProps = {
    switchToLogin: () => window.location.href = '/login',
  }

  state = {
    email: '',
    emailError: false,
    error: false,
    errorInfo: ''
  }

  // Email Form
  handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: e.currentTarget.value });
  }

  sendPasswordEmail = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  }

  render() {
    const { email } = this.state;
    const { switchToLogin } = this.props;
    return (
      <div>
        <form onSubmit={this.sendPasswordEmail}>
          <input
            type="email"
            onChange={this.handleEmail}
            value={email}
          />
        </form>
        <div>
          <p onClick={switchToLogin}> Back to Login </p>
          <button> Send Reset Link </button>
        </div>
      </div>
    )
  }
}

export default ResetPassword;