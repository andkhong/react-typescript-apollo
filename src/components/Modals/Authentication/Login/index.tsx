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
    emailError: false,
    password: '',
    passwordError: false,
    showPassword: false,
    isChecked: false,
    error: false,
    errorInfo: ''
  }

  // Email Input
  handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ email: e.currentTarget.value });
  }

  // Password Input
  handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ password: e.currentTarget.value });
  }

  // If user wants to be cached long term onto device
  rememberUser = () => this.setState({ isChecked: !this.state.isChecked });
  // Reveal Password Input
  revealPassword = () => this.setState({ showPassword: !this.state.showPassword });
  
  loginUser = async (e: React.FormEvent<EventTarget>) => {
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
            onChange={this.rememberUser}
          />
          <div onClick={this.revealPassword}> 
            {showPassword ? "Show password" : "Hide password"} 
          </div>
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