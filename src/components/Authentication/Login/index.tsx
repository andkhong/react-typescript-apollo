import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { FetchUser } from 'gqls/authentication/index';
import InputWrapper from 'styled/Wrappers/Input';
import { validateQueryParams } from 'utils/queryParams';
import { FormProps, LoginState } from '../interface';

interface ResponseProps {
  data: {
    fetchUser: {
      userId: string|null;
      token: string|null;
      success: boolean;
      error: {
        message: string;
        status: number;
      };
    }
  }
}

class Login extends React.Component<FormProps, LoginState> {
  static defaultProps = {
    switchToResetPassword: () => location.replace('/reset_password'),
    switchToSignUp: () => location.replace('/sign_up')
  }

  state = {
    email: '',
    password: '',
    showPassword: false,
    isChecked: false,
    isDisabled: true,
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
  
  loginUser = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    this.setState({ isDisabled: true });
    const { email, password } = this.state;
    this.props.fetchUser(email, password)
      .then((res: ResponseProps) => {
        const { token, success, error } = res.data.fetchUser;
        if (error) {
          return this.setState({ error: true, errorInfo: error.message, isDisabled: false });
        }
        if (success && token) {
          window.localStorage.setItem('bee-token', token);
          const url = new URL(window.location.href);
          const search = url.search.slice(1);
          return (url.pathname.slice(0, 7) === '/rooms/' && validateQueryParams(search, ['checkInDate', 'checkOutDate'])) 
            ? window.location.replace(`/bookings/${search}`)
            : window.location.reload();
        }
        this.setState({ isDisabled: false });
      });
  }

  render() {
    const { email, password, showPassword, isChecked, isDisabled, error, errorInfo } = this.state;
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
            <p>{showPassword ? "Show password" : "Hide password"}</p>
          </div>
          <button disabled={isDisabled}>Log in</button>
        </form>
        {error && <div> {errorInfo} </div>}
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
