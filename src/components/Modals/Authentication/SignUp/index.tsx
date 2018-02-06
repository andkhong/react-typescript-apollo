import * as React from 'react';
import Button from 'styled/Buttons/Form';
import { FormProps, SignUpState } from '../interface';

class SignUp extends React.Component<FormProps, SignUpState> {
  static defaultProps = {
    switchToLogin: () => window.location.href = '/login'
  }

  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  }

  handleInput = (e: any) => this.setState({ [e.target.name]: e.target.value })
  
  SignUpUser = async (e: any) => {
    e.preventDefault();    
  }

  render() {
    const { email, firstName, lastName, password } = this.state;
    const { switchToLogin } = this.props;
    return (
      <div>
        <form onSubmit={this.SignUpUser}>
          <input
            placeholder="Email address"
            name="email"
            type="email"
            value={email}
            onChange={this.handleInput}
          />
          <input
            placeholder="First name"
            name="firstName"
            type="text"
            value={firstName}
            onChange={this.handleInput}
          />
          <input
            placeholder="Last name"
            name="lastName"
            type="text"
            value={lastName}
            onChange={this.handleInput}
          />          
          <input
            placeholder="Create a Password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleInput}
          />
          <Button>Sign Up</Button>
        </form>
        <div> 
          <p>Already have an Beenest account?</p>
          <p onClick={switchToLogin}> Log in </p>
        </div>
      </div>
    );
  }
}

export default SignUp;
