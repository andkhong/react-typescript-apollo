export interface Props extends RouterProps { }

export interface State {
  authPortal: boolean;
  isMobile: boolean;
}

export interface RouterProps {
  history: any;
  location: Location;
  match: Match;
}

interface Location {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: string|undefined;
}

interface Match {
  isExact: boolean;
  params: {
    id: string;
  };
  path: string;
  url: string;
}