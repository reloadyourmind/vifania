import { datePattern } from 'assets/utils/DataFormatterProvider';
import { DateHelper } from 'assets/utils/DateHelper';
import i18next from 'i18next';
import moment, { Moment } from 'moment';
import { ParsedQuery } from 'query-string';

export const getValueByPath = (source: any, path: string | string[]) => {
    if (Array.isArray(path)) {
        return path.reduce((obj: any, key) => obj[key], source);
    }

    return source[path];
};

export const getPropertyPathAsProp = (path: string | string[] | undefined) => {
    if (!path || typeof path === 'string') {
        return path;
    }

    return path.join('.');
};

export const convertObjectDateValueToISOFormat = (
    object: Record<string, any>,
) => {
    return Object.entries(object).reduce((acc, [key, value]) => {
        let newValue = value;
        if (
            typeof value === 'object' &&
            !Array.isArray(value) &&
            moment(value).isValid()
        ) {
            newValue = DateHelper.formatISODate(value as Moment);
        }

        return {
            ...acc,
            ...{ [key]: newValue },
        };
    }, {});
};

export const convertObjectDateValueToMoment = (
    values: Record<string, any>,
): ParsedQuery => {
    return Object.entries(values).reduce((acc, [key, value]) => {
        let newValue = value;
        if (moment(value).isValid() && datePattern.test(value)) {
            newValue = moment(value);
        }

        return {
            ...acc,
            ...{ [key]: newValue },
        };
    }, {});
};

export const getLocalizedValue = (value?: any) => {
    const languageKey = i18next.language as keyof Localization;

    return value?.l10n?.[languageKey];
};

export type Localization = {
    ru: string;
    en: string;
};
