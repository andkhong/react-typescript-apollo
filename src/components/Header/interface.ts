import { RouterProps } from 'components/interface';

export interface Props extends RouterProps {
    toggleAuthPortal: () => void;
    toggleAuthForms: (form: string) => void;
    client: {
        resetStore: () => void;
    }
}