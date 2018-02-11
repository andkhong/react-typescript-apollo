import { RouterProps } from 'components/interface';

export interface ModalProps {
    closeAuthPortal: () => void;
    toggleAuthForms: (form: string) => void;
    authPortal: boolean;
    form: string;
}

export interface FormProps extends RouterProps {
    switchToLogin: () => void;
    switchToResetPassword: () => void;
    switchToSignUp: () => void;
    fetchUser: (email: string, password: string) => any;
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

export interface ResetPasswordState {
    email: string;
    isDisabled: boolean;
    error: boolean;
    errorInfo: string;
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
