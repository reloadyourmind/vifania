import { t } from 'i18next';
import moment, { Moment } from 'moment';

export const DEFAULT_TIME_FORMAT = 'HH:mm';
export const DEFAULT_TIME_SERVER_FORMAT = 'HH:mm:ss';
export const ISO_DATE = 'YYYY-MM-DD';
export const DEFAULT_DATE_FORMAT = 'YYYY/MM/DD';
export const DEFAULT_DATE_TIME_FORMAT = 'YYYY/MM/DD HH:mm';
export const DEFAULT_DATE_TIME_SECONDS_FORMAT = 'YYYY/MM/DD HH:mm:ss';

const format = (value: Moment | string, format = DEFAULT_DATE_FORMAT) => {
    const mValue = moment.isMoment(value) ? value : moment(value);

    return mValue.format(format);
};

const formatISODate = (value?: Moment | string) => {
    if (!value) {
        return;
    }

    return format(value, ISO_DATE);
};

const formatISODateTimeSeconds = (value?: Moment | string) => {
    if (!value) {
        return;
    }

    const mValue = moment.isMoment(value) ? value : moment(value);

    return mValue.toISOString();
};

const formatDate = (value: Moment | string) => {
    return format(value);
};

const formatDateTime = (value: Moment | string) => {
    return format(value, DEFAULT_DATE_TIME_FORMAT);
};

const formatDateTimeSeconds = (value: Moment | string) => {
    return format(value, DEFAULT_DATE_TIME_SECONDS_FORMAT);
};

const formatTime = (value: Moment | string) => {
    return format(value, DEFAULT_TIME_FORMAT);
};

const formatTimeSeconds = (value: Moment | string) => {
    return format(value, DEFAULT_TIME_SERVER_FORMAT);
};

const getYear = (value?: Moment | string) => {
    if (!value) {
        return;
    }

    const mValue = moment.isMoment(value) ? value : moment(value);

    return mValue.get('year');
};

export const DateHelper = {
    format,
    formatISODate,
    formatISODateTimeSeconds,
    formatDate,
    formatDateTime,
    formatDateTimeSeconds,
    formatTime,
    formatTimeSeconds,
    getYear,
};
