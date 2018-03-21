import {
  parseQueryParams,
  stringifyQueryParams,
  // addQueryParamsToUrl,
  // addQueryStringToUrl,
  // validateQueryParams
} from 'utils/queryParams';

describe('queryParams.ts', () => {

  it('parseQueryParams should return a object based off of string', () => {
    expect(parseQueryParams('hello=1')).toEqual({ 'hello': '1' });
  });

  it('stringifyQueryParams should return a string based off of an object', () => {
    expect(stringifyQueryParams({'hello': '1'})).toEqual('hello=1&redirect=blank');
  });
  
});
