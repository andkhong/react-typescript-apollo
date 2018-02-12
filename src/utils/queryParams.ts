import qs from 'qs';

export function parseQueryParams(search: string): object {
  return qs.parse(search);
};

export function stringifyQueryParams(queryParams: object): string {
  const url = new URL(window.location.href);
  return qs.stringify(Object.assign(queryParams, { redirect: url.pathname }));
};

export function addQueryParamsToUrl(queryParams: object): void {
  const url = new URL(window.location.href);
  const paramsObject = qs.parse(url.search.slice(1));
  paramsObject.redirect = url.pathname;
  const params = qs.stringify(Object.assign(paramsObject, queryParams));
  history.replaceState({}, '/', `${url.pathname}?${params}`);
};

export function addQueryStringToUrl(state: string): void {
  const url = new URL(window.location.href);
  history.replaceState({}, '/', `${url.pathname}?${state}`);
}