import { UrlHelper } from 'assets/utils/UrlHelper';
import { History, State } from 'history';

// eslint-disable-next-line no-underscore-dangle, init-declarations
let _history: History;

const setHistory = (history: History) => {
    _history = history;
};

const navigate = (url: string, state?: State) => {
    _history.push(url, state);
};

const replace = (url: string, state?: State) => {
    _history.replace(url, state);
};

const applySearchParams = (searchParams: Record<string, any>) => {
    const currentSearch = UrlHelper.parseSearchParams(window.location.search);
    const newSearch = UrlHelper.stringifySearchParams({
        ...currentSearch,
        ...searchParams,
    });
    navigate(`?${newSearch}`);
};

const setSearchParams = (searchParams: Record<string, any>) => {
    const newSearch = UrlHelper.stringifySearchParams(searchParams);
    navigate(`?${newSearch}`);
};

export const Router = {
    setHistory,
    navigate,
    replace,
    applySearchParams,
    setSearchParams,
};
