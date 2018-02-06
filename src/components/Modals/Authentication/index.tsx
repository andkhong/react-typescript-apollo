import * as React from 'react';
import * as ReactDOM from 'react-dom';

import AsyncComponent from 'HOCs/Async';
import AuthenticationModalWrapper from 'styled/Wrappers/AuthenticationModal';
import FormWrapper from 'styled/Wrappers/Form';
import { ModalProps } from './interface';

class AuthenticationModal extends React.Component<ModalProps, {}> {
  container = document.createElement('div') as HTMLDivElement;
  modalRoot = document.getElementById('modal-root') as any;

  componentsMap: any = {
    Login: (props: ModalProps) => <AsyncComponent {...props} load={import('./Login')} />,
    ResetPassword: (props: ModalProps) => <AsyncComponent {...props} load={import('./ResetPassword')} />,
    SignUp: (props: ModalProps) => <AsyncComponent {...props} load={import('./SignUp')} />
  }

  componentDidMount() {
    this.modalRoot.append(this.container);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.container);
  }

  switchToLogin = () => this.props.toggleAuthForms('Login')
  switchToResetPassword = () => this.props.toggleAuthForms('ResetPassword')
  switchToSignUp = () => this.props.toggleAuthForms('SignUp')

  render() {
    const switchProps = {
      switchToLogin: this.switchToLogin,
      switchToResetPassword: this.switchToResetPassword,
      switchToSignUp: this.switchToSignUp
    };
    const Component = this.componentsMap[this.props.form || 'Login'];
    return ReactDOM.createPortal(
      <>
      <AuthenticationModalWrapper onClick={this.props.closeAuthPortal} />
        <FormWrapper>
          <button onClick={this.props.closeAuthPortal}>X</button>
          <Component {...this.props} {...switchProps} />
        </FormWrapper>
      </>,
      this.container
    );
  }
}

export default AuthenticationModal;