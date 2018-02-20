import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AuthenticationModalWrapper from 'styled/Wrappers/AuthenticationModal';
import FormWrapper from 'styled/Wrappers/Form';
import AsyncComponent from 'HOCs/Async';
import { ModalProps } from 'components/Authentication/interface';

interface State {
  form: string;
}

class AuthenticationModal extends React.Component<ModalProps, State> {
  state = { 
    form: this.props.form || 'Login'
  };
  container = document.createElement('div') as HTMLDivElement;
  modalRoot = document.getElementById('modal-root') as any;

  componentsMap: any = {
    Login: (props: ModalProps) => <AsyncComponent {...props} load={import('components/Authentication/Login')} />,
    ResetPassword: (props: ModalProps) => <AsyncComponent {...props} load={import('components/Authentication/ResetPassword')} />,
    SignUp: (props: ModalProps) => <AsyncComponent {...props} load={import('components/Authentication/SignUp')} />
  }

  componentDidMount() {
    this.modalRoot.append(this.container);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.container);
  }

  switchToLogin = () => this.setState({ form: 'Login' });
  switchToResetPassword = () => this.setState({ form: 'ResetPassword' });
  switchToSignUp = () => this.setState({ form: 'SignUp' });

  render() {
    const switchProps = {
      switchToLogin: this.switchToLogin,
      switchToResetPassword: this.switchToResetPassword,
      switchToSignUp: this.switchToSignUp
    };
    const Component = this.componentsMap[this.state.form];
    return ReactDOM.createPortal(
      <>
        <AuthenticationModalWrapper onClick={this.props.toggleAuthPortal} />
        <FormWrapper>
          <button onClick={this.props.toggleAuthPortal}>X</button>
          <Component {...this.props} {...switchProps} />
        </FormWrapper>
      </>,
      this.container
    );
  }
}

export default AuthenticationModal;