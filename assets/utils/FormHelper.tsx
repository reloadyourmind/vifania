import { OptionProps } from 'antd/es/mentions';
import { NamePath } from 'antd/lib/form/interface';
import { t } from 'i18next';

export type FieldData = {
    name: string | Array<string | number>;
    errors: string[];
    touched: boolean;
};

type Violation = { field: string; message: string };
const getFieldDataItems = (errorData?: {
    violations: Violation[];
}): FieldData[] => {
    const fieldViolationsMap = getViolationsMap(errorData?.violations || []);

    return Object.entries(fieldViolationsMap).map(([fieldName, violations]) => {
        return {
            name: getFieldPath(normalizeFieldName(fieldName)),
            errors: violations.map((v) => v.message),
            touched: true,
        };
    });
};

const getViolationsMap = (
    violations: Violation[],
): Record<string, Violation[]> => {
    return (
        violations.reduce((acc, violation) => {
            if (!acc[violation.field]) {
                acc[violation.field] = [];
            }

            acc[violation.field].push(violation);

            return acc;
        }, {} as Record<string, Violation[]>) || {}
    );
};

const getFieldPath = (fieldName: string) => {
    return fieldName
        .split('.')
        .filter((part) => Boolean(part))
        .map((part) => {
            if (Number.isFinite(Number.parseInt(part))) {
                return Number.parseInt(part);
            }

            return part;
        });
};

const CROSS_PARAMETER_PATTERN = /.*<cross-parameter>\./i;

// eslint-disable-next-line no-useless-escape
const ARRAY_PATTERN = /[\[\]]/gm;

const normalizeFieldName = (fieldName: string) => {
    return fieldName
        .replace(CROSS_PARAMETER_PATTERN, '')
        .replace(ARRAY_PATTERN, '.');
};

const asOption =
    (i18nKeyPrefix?: string) =>
    ([_, value]: [string, string]) => ({
        value,
        children: i18nKeyPrefix ? t(`${i18nKeyPrefix}${value}`) : value,
    });

const objAsOptions = (enumEntity: any, i18nKeyPrefix?: string) => {
    return Object.entries(enumEntity).map(
        asOption(i18nKeyPrefix) as any,
    ) as OptionProps[];
};

function namePathToArray(path?: NamePath) {
    if (path === undefined || path === null) {
        return [];
    }

    return Array.isArray(path) ? path : [path];
}

export const FormHelper = { getFieldDataItems, objAsOptions, namePathToArray };
