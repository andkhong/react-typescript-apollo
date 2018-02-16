import { RouterProps } from 'components/interface';

export interface RoomProps extends RouterProps  {
    closeAuthPortal: () => void;
    toggleAuthForms: (form: string) => void;
};