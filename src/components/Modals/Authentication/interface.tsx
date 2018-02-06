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
    password: string;
    showPassword: boolean;
    isChecked: boolean;
}

export interface ResetPasswordState {
    email: string;
}

export interface SignUpState {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}
