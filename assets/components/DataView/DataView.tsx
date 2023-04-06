import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';

export type DataViewProps = {
    value: React.ReactNode | boolean;
    label?: React.ReactNode;
    hideLabel?: boolean;
    className?: string;
    align?: 'vertical' | 'horizontal';
};

const LONG_DASH = '—';

export const DataView = ({
    label,
    hideLabel,
    value,
    className,
    align = 'vertical',
}: DataViewProps) => {
    const hasValue =
        (value !== null && value !== undefined && value !== '') ||
        (typeof value === 'number' && Number.isFinite(Number(value)));

    const classes = {
        'app-data-view': true,
        'align-horizontal': align === 'horizontal',
    };

    const getLabel = () => {
        return label || <>&nbsp;</>;
    };

    const getValue = () => {
        if (hasValue) {
            return value;
        }

        return LONG_DASH;
    };

    return (
        <StyledDataViewWrapper className={classNames(className, classes)}>
            {!hideLabel && <StyledLabel>{getLabel()}</StyledLabel>}
            <StyledValue>{getValue()}</StyledValue>
        </StyledDataViewWrapper>
    );
};

const StyledDataViewWrapper = styled.div`
    position: relative;
    margin-bottom: 16px;

    label {
        word-break: break-word;
        font-size: 20px;
    }

    a {
        cursor: pointer;
    }

    &.align-horizontal {
        display: flex;

        label {
            margin: 0 10px 0 0;
            line-height: 20px;
        }

        div {
            width: fit-content;
        }
    }
`;

const StyledLabel = styled.label.attrs((props) => ({
    className: classNames(props.className, 'app-data-view__label'),
}))`
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #008dd2;
`;

const StyledValue = styled.div.attrs((props) => ({
    className: classNames(props.className, 'app-data-view__value'),
}))`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    word-break: break-word;
    width: -webkit-fill-available;
`;
