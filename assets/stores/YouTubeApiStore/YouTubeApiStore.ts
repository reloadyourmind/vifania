import axios from 'axios';
import { action, computed, observable } from 'mobx';

const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCZgHgDhKk4u2Xi-yhOGOK1SWUM7y5p8wk&channelId=UCRTTRs6eOR2MpzPZ2o361RA&part=snippet&type=video&eventtype=live&order=date&maxResults=4`;

export class YouTubeApiStoreClass {
    @observable data?: any;
    @observable isLoading = false;
    @observable hasError = false;
    @observable errors?: any;

    @action async loadStreams() {
        this.data = undefined;
        this.hasError = false;
        this.errors = undefined;
        this.isLoading = true;

        try {
            const response = await axios.get(YOUTUBE_API_URL);
            this.data = response.data.items;
        } catch (error) {
            this.hasError = true;
            this.errors = error;
        } finally {
            this.isLoading = false;
        }
    }

    @computed get streams() {
        return this.data || [];
    }
}

export const YouTubeApiStore = new YouTubeApiStoreClass();
