import queryString, { ParseOptions } from 'query-string';
import URLParse from 'url-parse';

const queryStringOptions: ParseOptions = {
    arrayFormat: 'bracket',
    parseNumbers: true,
    parseBooleans: true,
};

const getTargetUrl = (urlTemplate: string, params: Record<string, any>) => {
    return Object.entries(params).reduce((template, [key, value]) => {
        return template.replace(`:${key}`, value || '');
    }, urlTemplate);
};

const getUrlWithQueryParams = (query: Record<string, any>, url?: string) => {
    return URLParse(url || '').set('query', query);
};
const openLinkInNewTab = (url: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.click();
};

const downloadFile = (url: string, file: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = file;
    a.target = '_blank';
    a.click();
};

const parseSearchParams = (urlSearch: string) => {
    return queryString.parse(urlSearch, queryStringOptions);
};

const stringifySearchParams = (object: Record<string, any>) => {
    return queryString.stringify(object, queryStringOptions);
};

const getUrlWithoutHost = (url: string) => {
    const parsed = URLParse(url);

    return `${parsed.pathname}${parsed.query}`;
};

const parseUrl = (url: string) => {
    return URLParse(url);
};

export const UrlHelper = {
    getTargetUrl,
    openLinkInNewTab,
    downloadFile,
    getUrlWithQueryParams,
    parseSearchParams,
    stringifySearchParams,
    getUrlWithoutHost,
    parseUrl,
};
