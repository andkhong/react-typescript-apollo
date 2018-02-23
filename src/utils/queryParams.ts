import qs from 'qs';

export function parseQueryParams(search: string): object {
  return qs.parse(search);
};

export function stringifyQueryParams(queryParams: object): string {
  return qs.stringify(Object.assign(queryParams, { redirect: location.pathname }));
};

export function addQueryParamsToUrl(queryParams: object): void {
  const paramsObject = qs.parse(location.search.slice(1));
  paramsObject.redirect = location.pathname;
  const params = qs.stringify(Object.assign(paramsObject, queryParams));
  history.replaceState({}, '/', `${location.pathname}?${params}`);
};

export function addQueryStringToUrl(state: string): void {
  history.replaceState({}, '/', `${location.pathname}?${state}`);
}

export function validateQueryParams(search: string, items: string[]): boolean {
  const qp = qs.parse(search);
  for (let i = 0, len = items.length; i < len; i++) {
    if (!(items[i] in qp)) return false;
    if (qp[items[i]].length < 1) return false;
  }
  return true;
}