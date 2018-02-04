import qs from 'qs';

export function parseQueryParams(search: string): object {
    return qs.parse(search);
};

export function stringifyQueryParams(queryParams: object): string {
    return qs.stringify(queryParams);
};

export function addQueryParamsToUrl(queryParams: object): void {
    const url = new URL(window.location.href);
    const qp = qs.parse(url.search.slice(1));
    const params = qs.stringify(Object.assign(qp, queryParams));
    history.pushState({}, '/', `${url.pathname}?${params}`);
};
