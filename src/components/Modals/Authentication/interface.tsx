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
}

export interface LoginState {
    email: string;
    emailError: boolean;
    password: string;
    passwordError: boolean;
    showPassword: boolean;
    isChecked: boolean;
    error: boolean;
    errorInfo: string;
}

export interface ResetPasswordState {
    email: string;
    emailError: boolean;
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
    error: boolean;
    errorInfo: string;
}
