import file from 'assets/stores/NewsStore/news.json';
import { action, computed, observable } from 'mobx';

export class NewsStoreClass {
    @observable data?: any;
    @observable isLoading = false;
    @observable hasError = false;
    @observable errors?: any;

    @action loadList() {
        this.data = undefined;
        this.hasError = false;
        this.errors = undefined;
        this.isLoading = true;

        try {
            this.data = file;
        } catch (error) {
            this.hasError = true;
            this.errors = error;
            console.error(error);
        } finally {
            this.isLoading = false;
        }
    }

    @computed get list() {
        return this.data || [];
    }
}

export const NewsStore = new NewsStoreClass();

export type News = {
    img: string;
    title: string;
    description: string;
    date: string;
    url: string;
};
