import { RouterProps } from 'components/interface';

export interface Props extends RouterProps {
    closeAuthPortal: () => void;
    toggleAuthForms: (form: string) => void;
}