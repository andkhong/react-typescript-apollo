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
  const qp = qs.parse(url.search.slice(1));
  qp.redirect = url.pathname;
  const params = qs.stringify(Object.assign(qp, queryParams));
  history.replaceState({}, '/', `${url.pathname}?${params}`);
};

export function addQueryStringToUrl(state: string): void {
  const url = new URL(window.location.href);
  history.replaceState({}, '/', `${url.pathname}?${state}`);
}