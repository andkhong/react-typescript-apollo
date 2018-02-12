import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { FetchUser } from 'gqls/authentication/index';
import InputWrapper from 'styled/Wrappers/Input';
import { parseQueryParams } from 'utils/queryParams';
import { FormProps, LoginState } from '../interface';

interface ResponseProps {
  data: {
    fetchUser: {
      userId: string|null;
      token: string|null;
      success: boolean;
      error: any;
    }
  }
}

class Login extends React.Component<FormProps, LoginState> {
  static defaultProps = {
    switchToResetPassword: () => window.location.href = '/reset_password',
    switchToSignUp: () => window.location.href = '/sign_up'
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

  componentWillUpdate(nextProps: any){
    console.log('this is next props', nextProps);
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
        const { userId, token, success, error } = res.data.fetchUser;
        if (error) {
          return this.setState({ error: true, errorInfo: error.message, isDisabled: false });
        }
        if (success && token) {
          console.log(userId, 'has successfully logged in');
          window.localStorage.setItem('bee-token', token);
          if (this.props.history) {
            const redirect = getRedirect();
            const search = new URL(window.location.href).search.slice(1);
            this.props.history.push(redirect, search);
          } else {
            window.location.reload();
          }
        }
        this.setState({ isDisabled: false });
      })
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
    props: (props: any) => ({
      fetchUser: (email: string, password: string) => props.mutate({ variables: { email, password } })
    })
  })
)(Login);

function getRedirect(): string {
  const url = new URL(window.location.href).search.slice(1);
  const qp = parseQueryParams(url) as { redirect: string };
  return qp.redirect || '/'
}