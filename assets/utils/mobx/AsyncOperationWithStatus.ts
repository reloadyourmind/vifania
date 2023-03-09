import { notification } from 'antd';
import axios, { AxiosPromise } from 'axios';
import i18next from 'i18next';
import { action, computed, observable, toJS } from 'mobx';

type Unwrap<T> = T extends Promise<infer U>
    ? U
    : T extends AxiosPromise<infer U>
    ? U
    : T;

export type AsyncFunction = (
    ...args: any[]
) => Promise<any> | AxiosPromise<any> | undefined;

export type AsyncOperationSettings = {
    notifyError500?: boolean;
    defaultIsLoading?: boolean;
};

const DEFAULT_SETTINGS: AsyncOperationSettings = {
    notifyError500: true,
    defaultIsLoading: false,
};

export class AsyncOperationWithStatus<
    F extends AsyncFunction,
    DataType = Unwrap<ReturnType<F>>,
> {
    @observable isLoading = this.settings.defaultIsLoading;
    @observable error?: any;
    @observable errorData?: any;
    @observable isLoaded = false;
    @observable data?: DataType;
    @observable countLoads = 0;

    private silentMode = false;

    @computed get hasData() {
        return Boolean(this.data);
    }

    @computed get hasError() {
        return Boolean(this.error);
    }

    constructor(
        private fn: F,
        private settings: AsyncOperationSettings = DEFAULT_SETTINGS,
    ) {}

    @action async call(...params: Parameters<F>) {
        try {
            if (!this.silentMode) {
                this.isLoading = true;
            }
            this.isLoaded = false;
            this.error = undefined;

            const data = (await this.fn.call(undefined, ...params)) as DataType;

            this.data = data;

            this.isLoaded = true;

            return data;
        } catch (error) {
            console.warn(error);
            this.error = error;
            if (axios.isAxiosError(error)) {
                this.errorData = error.response?.data;
                this.showErrorNotifications();
            } else {
                this.errorData = undefined;
            }
            this.isLoaded = false;
        } finally {
            this.countLoads++;
            this.isLoading = false;
        }
    }

    showErrorNotifications() {
        if (
            this.settings.notifyError500 &&
            isNetworkError(this.errorData) &&
            this.errorData.status >= 500
        ) {
            notification.error({
                message: i18next.t('Errors.500'),
                description: this.errorData.title,
            });
            console.error(toJS(this.errorData));
        }
    }

    @action reset() {
        this.errorData = undefined;
        this.error = undefined;
        this.data = undefined;
        this.isLoading = this.settings.defaultIsLoading;
        this.isLoaded = false;
        this.countLoads = 0;
    }

    turnOnSilentMode() {
        this.silentMode = true;
    }

    turnOffSilentMode() {
        this.silentMode = false;
    }
}

interface NetworkError {
    detail?: string;
    status: number;
    title?: string;
}
function isNetworkError(value: any): value is NetworkError {
    if (typeof value?.status === 'number') {
        return true;
    }

    return false;
}
