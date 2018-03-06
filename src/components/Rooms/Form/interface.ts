import { RouterProps } from 'components/interface';
import { Room } from '../interface';

export interface QueryParams {
  checkInDate: string;
  checkOutDate: string;
  guests: string;
}

export interface Props extends RouterProps {
  toggleAuthForms: (form: string) => void;
  room: Room;
}

export interface State {
  guests: string;
}

export interface CalendarPicker {
  checkInDate: string | null;
  checkOutDate: string | null;
}
