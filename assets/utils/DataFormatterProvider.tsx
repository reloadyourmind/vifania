/* eslint-disable complexity */
/* eslint-disable sonarjs/max-switch-cases */
/* eslint-disable sonarjs/cognitive-complexity */

import { DateHelper } from 'assets/utils/DateHelper';
import { NumberHelper } from 'assets/utils/NumberHelper';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ReverseMap<T> = T[keyof T];

export const DataFormatterFormat = {
    number: 'number',
    numberInt: 'number-int',
    numberFloat: 'number-float',
    percent: 'percent',
    money: 'money',
    string: 'string',
    date: 'date',
    dataTime: 'date-time',
    dateTimeSeconds: 'date-time-seconds',
    time: 'time',
    timeSeconds: 'time-seconds',
    email: 'mail',
    tel: 'tel',
    linkInternal: 'link-internal',
    linkExternal: 'link-external',
} as const;

export type DataFormatterFormats = ReverseMap<typeof DataFormatterFormat>;

export const telPattern = /^\+976[0-9]{8}$/;
export const mailPattern =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

export const datePattern = /^\d\d\d\d-\d\d-\d\d/;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type DataFormatter = (value?: any, options?: any) => React.ReactNode;

export const DataFormatterProvider = {
    getFormatter(type?: DataFormatterFormats): DataFormatter {
        switch (type) {
            case DataFormatterFormat.number:
            case DataFormatterFormat.numberFloat: {
                return (value: any) =>
                    NumberHelper.formatThousandSeparator(value);
            }
            case DataFormatterFormat.numberInt: {
                return (value: any) =>
                    NumberHelper.formatThousandSeparator(value, 0);
            }
            case DataFormatterFormat.percent: {
                return (value: any) => NumberHelper.formatToPercent(value);
            }
            case DataFormatterFormat.money: {
                return (value: any) => NumberHelper.formatToMNT(value);
            }
            case DataFormatterFormat.date: {
                return (value: any) => DateHelper.formatDate(value);
            }
            case DataFormatterFormat.dataTime: {
                return (value: any) => (
                    <span>
                        {DateHelper.formatDate(value)}
                        <StyledTime>{DateHelper.formatTime(value)}</StyledTime>
                    </span>
                );
            }
            case DataFormatterFormat.dateTimeSeconds: {
                return (value: any) => (
                    <span>
                        {DateHelper.formatDate(value)}
                        <StyledTime>
                            {DateHelper.formatTimeSeconds(value)}
                        </StyledTime>
                    </span>
                );
            }
            case DataFormatterFormat.time: {
                return (value: any) => DateHelper.formatTime(value);
            }
            case DataFormatterFormat.timeSeconds: {
                return (value: any) => DateHelper.formatTimeSeconds(value);
            }
            case DataFormatterFormat.email: {
                return (value: any) => <a href={`mailto:${value}`}>{value}</a>;
            }
            case DataFormatterFormat.tel: {
                return (value: any) => <a href={`tel:${value}`}>{value}</a>;
            }
            case DataFormatterFormat.linkInternal: {
                return (value: any, props: any) => {
                    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
                    if (!props?.to) {
                        throw new Error(
                            'Expected param "to" for "link-internal" format',
                        );
                    }

                    return <Link {...props}>{value}</Link>;
                };
            }
            case DataFormatterFormat.linkExternal: {
                return (value: any, { to, ...props }: any) => {
                    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
                    if (!to) {
                        throw new Error(
                            'Expected param "to" for "link-external" format',
                        );
                    }

                    return (
                        // eslint-disable-next-line react/jsx-no-target-blank
                        <a target="_blank" href={to} {...props}>
                            {value}
                        </a>
                    );
                };
            }
            default: {
                return (value: any) => value.toString();
            }
        }
    },

    guessFormat(value: any): DataFormatterFormats {
        if (typeof value === 'string') {
            if (moment(value).isValid() && datePattern.test(value)) {
                return DataFormatterFormat.date;
            }
            if (telPattern.test(value)) {
                return DataFormatterFormat.tel;
            }
            if (mailPattern.test(value)) {
                return DataFormatterFormat.email;
            }
        }

        if (typeof value === 'number') {
            return DataFormatterFormat.numberInt;
        }

        if (value instanceof Date || moment.isMoment(value)) {
            return DataFormatterFormat.date;
        }

        return DataFormatterFormat.string;
    },
};

const StyledTime = styled.span`
    color: gray;
    margin-left: 10px;
`;
