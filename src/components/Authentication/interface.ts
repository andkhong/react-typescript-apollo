import { RouterProps } from 'components/interface';

export interface ModalProps {
  toggleAuthPortal: () => void;
  toggleAuthForms: (form: string) => void;
  form: string;
}

export interface FormProps extends RouterProps {
  switchToLogin: () => void;
  switchToResetPassword: () => void;
  switchToSignUp: () => void;
  fetchUser: (email: string, password: string) => any;
  resetUserPassword: (email: string) => any;
  signUpUser: (email: string, firstName: string, lastName: string, password: string) => any;
  verifyPassword: (email: string, verificationCode: string, password: string) => any;
}

export interface LoginState {
  email: string;
  password: string;
  showPassword: boolean;
  isChecked: boolean;
  isDisabled: boolean;
  error: boolean;
  errorInfo: string;
}

export interface LoginResponse {
  data: {
    fetchUser: {
      userId: string | null;
      token: string | null;
      success: boolean;
      error: {
        message: string;
        status: number;
      };
    }
  }
}

export interface ResetPasswordState {
  email: string;
  isDisabled: boolean;
  error: boolean;
  errorInfo: string;
}

export interface ResetPasswordResponse {

}

export interface SignUpState {
  email: string;
  emailError: boolean;
  firstName: string;
  firstNameError: boolean;
  lastName: string;
  lastNameError: boolean;
  password: string;
  passwordError: boolean;
  isDisabled: boolean;
  error: boolean;
  errorInfo: string;
}

export interface SignUpResponse {

}

export interface VerificationPasswordState {
  email: string;
  emailError: boolean;
  verificationCode: string;
  verificationCodeError: boolean;
  password: string;
  passwordError: boolean;
  isDisabled: boolean;
  error: boolean;
  errorInfo: string;
}

export interface VerificationResponse {

}