import qs from 'qs';

export function parseQueryParams(search: string): object {
    return qs.parse(search);
};

export function stringifyQueryParams(queryParams: object): string {
    return qs.stringify(queryParams);
};

export function addQueryParamsToUrl(queryParams: object): void {
    const url = new URL(window.location.href);
    history.pushState({}, '/', `${url.pathname}?${qs.stringify(queryParams)}`);
};
