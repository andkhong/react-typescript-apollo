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

  handleInput = (e: any) => this.setState({ [e.target.name]: e.target.value })
  
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
            name="email"
            value={email}
            onChange={this.handleInput}
          />
          <input
            placeholder="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={this.handleInput}
          />
          <input
            type="checkbox"
            name="isChecked"
            checked={isChecked}
            onChange={this.handleInput}
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