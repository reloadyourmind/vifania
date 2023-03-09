/* eslint-disable no-unused-vars */

import { computed } from 'mobx';

export type LoadingStatusType = {
    isLoading?: boolean;
    isLoaded?: boolean;
    hasError?: boolean;
};
export class CombinedLoadingStatus {
    constructor(private items: LoadingStatusType[]) {}

    @computed get isLoading() {
        return this.items.some((x) => x.isLoading);
    }

    @computed get hasError() {
        return this.items.some((x) => x.hasError);
    }

    @computed get isLoaded() {
        return this.items.every((x) => x.isLoaded);
    }
}
