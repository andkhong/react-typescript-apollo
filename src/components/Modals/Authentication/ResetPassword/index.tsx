import * as React from 'react';
import { isEmailValid } from 'utils/formValidation';
import { FormProps, ResetPasswordState } from '../interface';

class ResetPassword extends React.Component<FormProps, ResetPasswordState> {
  static defaultProps = {
    switchToLogin: () => window.location.href = '/login'
  }

  state = {
    email: ''
  }

  handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: e.currentTarget.value });
  }

  sendPasswordEmail = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(isEmailValid(this.state.email)){

    }
  }

  render() {
    const { email } = this.state;
    const { switchToLogin } = this.props;
    return (
      <div>
        <form onSubmit={this.sendPasswordEmail}>
          <input
            type="email"
            name="email"
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