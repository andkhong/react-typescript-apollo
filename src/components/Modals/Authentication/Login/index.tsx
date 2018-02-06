import * as React from 'react';
import InputWrapper from 'styled/Wrappers/Input';
import { FormProps, LoginState } from '../interface';

class Login extends React.Component<FormProps, LoginState> {
  static defaultProps = {
    switchToResetPassword: () => window.location.href = '/reset_password',
    switchToSignUp: () => window.location.href = '/sign_up'
  }

  state = {
    email: '',
    password: '',
    showPassword: false,
    isChecked: false
  }

  handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: e.currentTarget.value });
  }

  handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ password: e.currentTarget.value });
  }

  handleCheckbox = () => { 
    this.setState({ isChecked: !this.state.isChecked })
  }
  
  revealPassword = () => this.setState({ showPassword: !this.state.showPassword })
  
  loginUser = async (e: any) => {
    e.preventDefault();
  }

  render() {
    const { email, password, showPassword, isChecked } = this.state;
    const { switchToResetPassword, switchToSignUp } = this.props;
    return (
      <div>
        <form autoComplete="off" onSubmit={this.loginUser}>
          <InputWrapper
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={this.handleEmail}
          />
          <input
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={this.handlePassword}
          />
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleCheckbox}
          />
          <div onClick={this.revealPassword}> {showPassword ? "Show password" : "Hide password"} </div>
          <button>Log in</button>
        </form>
        <div>
          <p onClick={switchToResetPassword}>Forgot Password?</p>
        </div>
        <div>
          <p onClick={switchToSignUp}>Don't have an account? Sign up</p>
        </div>
      </div>
    );
  }
}

export default Login;