import axios from 'axios';
import { action, computed, observable } from 'mobx';

const NEWS_URL = 'https://staging.vifania.by/api/news/1';

export class NewsStoreClass {
    @observable data?: News[];
    @observable item?: News;
    @observable isLoading = false;
    @observable hasError = false;
    @observable errors?: any;

    @action async loadList() {
        this.data = undefined;
        this.item = undefined;
        this.hasError = false;
        this.errors = undefined;
        this.isLoading = true;

        try {
            const response = await axios.get(NEWS_URL);
            this.data = response.data;
        } catch (error) {
            this.hasError = true;
            this.errors = error;
            console.error(error);
        } finally {
            this.isLoading = false;
        }
    }

    @action loadItem(id: number | string) {
        this.item = undefined;
        this.hasError = false;
        this.errors = undefined;
        this.isLoading = true;

        try {
            this.item = this.data?.find((item: News) => item.id === Number(id));
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

    @computed get currentItem() {
        return this.item || ({} as News);
    }
}

export const NewsStore = new NewsStoreClass();

export type News = {
    id: number;
    img: string;
    title: string;
    description: string;
    date: string;
    htmlContent?: string;
    prewNews?: ShortNews;
    nextNews?: ShortNews;
};

export type ShortNews = {
    id: number;
    title: string;
    date: string;
};
