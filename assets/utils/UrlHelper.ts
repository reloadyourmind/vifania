import {
    convertObjectDateValueToISOFormat,
    convertObjectDateValueToMoment,
} from 'assets/utils/ObjectHelper';
import queryString, {
    ParseOptions,
    StringifyOptions as StringifyOptionsType,
} from 'query-string';
import URLParse from 'url-parse';

export type SearchParamsOptions = ParseOptions & {
    parseDate?: boolean;
};
export type StringifyOptions = StringifyOptionsType & {
    parseDate?: boolean;
};

const searchParamsOptions: SearchParamsOptions = {
    arrayFormat: 'bracket',
    parseNumbers: true,
    parseBooleans: true,
    parseDate: false,
};

const stringifyOptions: StringifyOptions = {
    parseDate: true,
    skipEmptyString: true,
    skipNull: true,
    arrayFormat: 'bracket',
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

const parseSearchParams = (
    urlSearch: string,
    { parseDate, ...options } = searchParamsOptions,
) => {
    const queryParams = queryString.parse(urlSearch, options);

    if (parseDate) {
        return convertObjectDateValueToMoment(queryParams);
    }

    return queryParams;
};

const stringifySearchParams = (
    object: Record<string, any>,
    { parseDate, ...options } = stringifyOptions,
) => {
    if (parseDate) {
        return queryString.stringify(
            convertObjectDateValueToISOFormat(object),
            options,
        );
    }

    return queryString.stringify(object, options);
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
