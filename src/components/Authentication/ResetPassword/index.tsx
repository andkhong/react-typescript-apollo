import * as React from 'react';
import { graphql, compose } from 'react-apollo';
import { ResetUserPassword } from 'gqls/authentication/';
import { isEmailValid } from 'utils/formValidation';
import { FormProps, ResetPasswordState } from '../interface';

class ResetPassword extends React.Component<FormProps, ResetPasswordState> {
  static defaultProps = {
    switchToLogin: () => location.replace('/login'),
  }

  state = {
    email: '',
    isDisabled: true,
    error: false,
    errorInfo: ''
  }

  render() {
    const { email, isDisabled, error, errorInfo } = this.state;
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
          <p onClick={this.props.switchToLogin}> Back to Login </p>
        </div>
      </div>
    )
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
    this.setState({ isDisabled: true });
    this.props.resetUserPassword(this.state.email)
      .then((res: any) => {
        console.log(res.data.resetUserPassword.error);
      })
    this.setState({ isDisabled: false });
  }

}

export default compose(
  graphql(ResetUserPassword, {
    props: ({ mutate }: any) => ({
      resetUserPassword: (email: string) => mutate({ variables: { email } })
    })
  })
)(ResetPassword);