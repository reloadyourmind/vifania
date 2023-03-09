import { action, observable } from 'mobx';

export enum PageSizes {
    size10 = 10,
    size20 = 20,
    size30 = 30,
    size40 = 40,
}
export class Pager {
    @observable page = 0;
    @observable total = 0;
    @observable size: PageSizes = PageSizes.size10;

    constructor(private defaultPageSize: PageSizes = PageSizes.size10) {
        this.reset();
    }

    @action setPage(page: number) {
        this.page = page;
    }

    @action setSize(size: PageSizes) {
        this.size = size;
    }

    @action setTotal(total: number) {
        this.total = total;
    }

    @action reset() {
        this.setPage(0);
        this.setSize(this.defaultPageSize);
    }
}
