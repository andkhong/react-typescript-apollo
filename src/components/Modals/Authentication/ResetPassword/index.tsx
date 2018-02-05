import * as React from 'react';
import { isEmailValid } from 'utils/formValidation';
import { FormProps, ResetPasswordState } from '../interface';

class ResetPassword extends React.Component<FormProps, ResetPasswordState> {
  static defaultProps = {
    switchToLogin: () => window.location.href = '/login'
  }

  state = {
    email: '',
    hasError: false,
    errorInfo: ''
  }

  componentDidCatch(hasError: any, errorInfo: any) {
    this.setState({ hasError: true })
  }

  handleInput = (e: any) => this.setState({ [e.target.name]: e.target.value })

  sendPasswordEmail = async (e: any) => {
    e.preventDefault();
  }

  render() {
    const { email, hasError, errorInfo } = this.state;
    const { switchToLogin } = this.props;
    return (
      <div>
        <form onSubmit={this.sendPasswordEmail}>
          <input
            type="email"
            name="email"
            onChange={this.handleInput}
            value={email}
          />
          {hasError && { errorInfo }}
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