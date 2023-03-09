import i18n, { initInternationalization } from 'assets/core/i18n';
import { action, computed, observable } from 'mobx';

export const SUPPORTED_LOCALES = ['ru'];

export class SettingsStoreClass {
    @observable currentLocale?: string;

    @action async setupInternationalization() {
        await initInternationalization({} as any);
    }

    @action async init() {
        await this.setupInternationalization();
    }

    @action async setLocale(locale: string) {
        await i18n.changeLanguage(locale);
        this.currentLocale = locale;
    }

    @computed get supportedLocales() {
        return SUPPORTED_LOCALES;
    }

    @computed get hasFewLocales() {
        return this.supportedLocales.length > 1;
    }

    @computed get currentLang() {
        return this.currentLocale;
    }
}

export const SettingsStore = new SettingsStoreClass();
