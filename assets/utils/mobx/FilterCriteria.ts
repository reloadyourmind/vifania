import { action, computed, observable } from 'mobx';

export class FilterCriteria<Filter extends Record<string, any> = any> {
    @observable sort?: string[];
    @observable filter: Filter;
    @observable defaultFilter: Filter;

    constructor(private initialFilterValue: Filter = {} as Filter) {
        this.defaultFilter = normalizeFilterValue(initialFilterValue);
        this.filter = this.defaultFilter;
    }

    @action setFilter(filter: Filter) {
        const normalizedFilter = normalizeFilterValue(filter);
        this.filter = normalizedFilter;
    }

    @action applyFilter(filter: Filter) {
        const normalizedFilter = normalizeFilterValue(filter);
        this.filter = { ...this.filter, ...normalizedFilter };
    }

    @action resetFilter() {
        this.filter = this.defaultFilter;
    }

    @computed get hasFilter() {
        return (
            Object.values(this.filter)
                .map((value) => {
                    if (Array.isArray(value)) {
                        return value.length > 0;
                    }
                    if (typeof value === 'number') {
                        return true;
                    }

                    return Boolean(value);
                })
                .filter(Boolean).length > 0
        );
    }
}

function normalizeFilterValue(filter: Record<string, any>) {
    const entries = Object.entries(filter).map(([key, value]) => {
        if (isInvalid(value)) {
            return [key, undefined];
        }

        return [key, value];
    });

    return Object.fromEntries(entries);
}

function isInvalid(value: any) {
    if (typeof value === 'string') {
        return !value;
    }

    if (typeof value === 'object') {
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        return !value;
    }

    if (typeof value === 'number') {
        return !Number.isFinite(value);
    }

    return false;
}
