import { configureMobX } from 'assets/core/mobXSettings';
import { Router } from 'assets/core/router/Router';
import { CalendarStore } from 'assets/stores/CalendarStore/CalendarStore';
import { SettingsStore } from 'assets/stores/SettingsStore/SettingsStore';
import { History } from 'history';
import { action, computed, observable } from 'mobx';

export class AppStoreClass {
    @observable isSetHistory = false;
    @observable isInit = false;
    @observable isLoading = false;

    @action
    async init() {
        configureMobX();

        await SettingsStore.init();
        await CalendarStore.init();

        this.isInit = true;
    }

    @action
    reInit() {
        this.isInit = false;
    }

    @computed get started() {
        return this.isSetHistory && this.isInit;
    }

    setHistory(history: History) {
        Router.setHistory(history);
        this.isSetHistory = true;
    }

    @action startLoading() {
        this.isLoading = true;
    }

    @action stopLoading() {
        this.isLoading = false;
    }
}

export const AppStore = new AppStoreClass();
