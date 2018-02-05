export interface Props {
    loading: boolean;
    error: any;
}

export interface State {
    authPortal: boolean, 
    form: string
}

export interface RouterProps {
    history: any;
    location: any;
    match: any;
  }