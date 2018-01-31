export function getQueryParamsFromURL(url: string,): object {
    let urlString = new URL(url);
    let params = new URLSearchParams(urlString.search.slice(1));
    let output: any = {};
    for(let i = 1; i < arguments.length; i++){
      output.arguments[i] = params.get(arguments[i]);
    }
    return output;
}

