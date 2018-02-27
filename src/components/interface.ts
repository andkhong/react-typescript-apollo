export interface Props extends RouterProps {
    loading: boolean;
}

export interface State {
    authPortal: boolean
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