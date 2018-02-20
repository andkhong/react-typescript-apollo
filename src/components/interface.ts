export interface Props extends RouterProps {
    loading: boolean;
}

export interface State {
    authPortal: boolean
}

export interface RouterProps {
    history: any;
    location: any;
    match: any;
  }