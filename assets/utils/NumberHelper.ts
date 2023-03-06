const NUMBER_LOCALE = 'ru-Ru';

const formatToPercent = (value: number, minimumFractionDigits = 2) => {
    return Number(value / 100).toLocaleString(NUMBER_LOCALE, {
        style: 'percent',
        minimumFractionDigits,
    });
};

const formatThousandSeparator = (value: number, minimumFractionDigits = 2) => {
    return Number(value).toLocaleString(NUMBER_LOCALE, {
        minimumFractionDigits,
    });
};

const formatToMNT = (value: number, minimumFractionDigits = 2) => {
    return Intl.NumberFormat(NUMBER_LOCALE, {
        currency: 'MNT',
        style: 'currency',
        currencyDisplay: 'narrowSymbol',
        minimumFractionDigits,
    }).format(value);
};

const enFormatToMNT = (value: number, minimumFractionDigits = 2) => {
    return Intl.NumberFormat('en-us', {
        currency: 'MNT',
        style: 'currency',
        currencyDisplay: 'narrowSymbol',
        minimumFractionDigits,
    }).format(value);
};

export const NumberHelper = {
    formatToPercent,
    formatThousandSeparator,
    formatToMNT,
    enFormatToMNT,
};
