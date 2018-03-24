import { RouterProps } from 'components/interface';

export interface Props extends RouterProps {
    client: any;
    toggleAuthPortal: () => void;
    toggleAuthForms: () => void;

}