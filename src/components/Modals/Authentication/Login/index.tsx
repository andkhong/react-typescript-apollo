import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { FetchUser } from 'gqls/authentication/index';
import InputWrapper from 'styled/Wrappers/Input';
import { LoginState } from '../interface';

class Login extends React.Component<any, LoginState> {
  static defaultProps = {
    switchToResetPassword: () => window.location.href = '/reset_password',
    switchToSignUp: () => window.location.href = '/sign_up'
  }

  state = {
    email: 'andy@thebeetoken.com',
    password: 'Jukebox00!',
    showPassword: false,
    isChecked: false,
    isDisabled: false, // Change back to true
    error: false,
    errorInfo: ''
  }

  // Email Input
  handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 
      email: e.currentTarget.value,
      isDisabled: !(e.currentTarget.value.length > 1 && this.state.password.length > 1)
    });
  }

  // Password Input
  handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ 
      password: e.currentTarget.value,
      isDisabled: !(e.currentTarget.value.length > 1 && this.state.email.length > 1)
    });
  }

  // If user wants to be cached long term onto device
  rememberUser = () => this.setState({ isChecked: !this.state.isChecked });
  // Reveal Password Input
  revealPassword = () => this.setState({ showPassword: !this.state.showPassword });
  
  loginUser = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.fetchUser(email, password);
  }

  render() {
    const { email, password, showPassword, isChecked, isDisabled } = this.state;
    const { switchToResetPassword, switchToSignUp } = this.props;
    return (
      <div>
        <form autoComplete="off" onSubmit={this.loginUser}>
          <InputWrapper
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={this.handleEmail}
            required
          />
          <input
            placeholder="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={this.handlePassword}
            required
          />
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.rememberUser}
          />
          <div onClick={this.revealPassword}> 
            {showPassword ? "Show password" : "Hide password"} 
          </div>
          <button disabled={isDisabled}>Log in</button>
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

export default compose(
  graphql(FetchUser, {
    props: ({ mutate }: any) => ({
      fetchUser: (email: string, password: string) => mutate({ variables: { email, password } })
    })
  })
)(Login);