import { RouterProps } from 'components/interface';

export interface QueryParams {
  checkInDate: string;
  checkOutDate: string;
  guests: string;
}

export interface Props extends RouterProps {
  toggleAuthForms: (form: string) => void;
  maxGuests: string;
  datesBooked: string[][];
}

export interface State {
  guests: string;
}

export interface CalendarPicker {
  checkInDate: string | null;
  checkOutDate: string | null;
}
