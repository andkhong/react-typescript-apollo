import qs from 'qs';

export function parseQueryParams(search: string): object {
    return qs.parse(search);
};

export function stringifyQueryParams(queryParams: object): string {
    return qs.stringify(queryParams);
}