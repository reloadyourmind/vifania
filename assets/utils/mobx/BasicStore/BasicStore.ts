/* eslint-disable no-return-await */
import { action, computed } from 'mobx';
import { AsyncOperationWithStatus } from 'src/utils/mobx/AsyncOperationWithStatus';
import {
    BasicStoreApi,
    Entity,
    isPageableContent,
} from 'src/utils/mobx/BasicStore/BasicStore.types';
import { FilterCriteria } from 'src/utils/mobx/FilterCriteria';
import { Pager } from 'src/utils/mobx/Pager';
import { Sorter, SorterDirection } from 'src/utils/mobx/Sorter';

export abstract class BasicStore<
    Item extends Entity,
    Filter extends Record<string, any> = any,
    ItemForUpdate = Item,
    ItemForCreate = Item,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ItemDetails = Item,
> {
    abstract api: BasicStoreApi<
        Item,
        ItemForUpdate,
        ItemForCreate,
        ItemDetails
    >;

    filterCriteria?: FilterCriteria<Filter>;
    pager?: Pager;
    sorter?: Sorter;

    listLoader = new AsyncOperationWithStatus(
        (...args: any[]) => {
            return this.api.loadList?.(...args);
        },
        { defaultIsLoading: true },
    );

    itemLoader = new AsyncOperationWithStatus(
        (...args: any[]) => {
            return this.api.loadItem?.(...args);
        },
        { defaultIsLoading: true },
    );

    updateItemLoader = new AsyncOperationWithStatus(
        (id: string | number, data: ItemForUpdate) => {
            return this.api.updateItem?.(id, data);
        },
    );

    createItemLoader = new AsyncOperationWithStatus((data: ItemForCreate) => {
        return this.api.createItem?.(data);
    });

    removeItemLoader = new AsyncOperationWithStatus((id: number | string) => {
        return this.api.removeItem?.(id);
    });

    @action async loadList(resetBeforeLoad = true) {
        if (resetBeforeLoad) {
            this.listLoader.reset();
        }
        await this.listLoader.call();
        await this.processPageableList();
    }

    @action async loadItem(id?: string | number) {
        await this.itemLoader.call(id);
    }

    @action async update(id: string | number, data: ItemForUpdate) {
        this.updateItemLoader.reset();

        return await this.updateItemLoader.call(id, data);
    }

    @action async create(data: ItemForCreate) {
        this.createItemLoader.reset();

        return await this.createItemLoader.call(data);
    }

    @action async remove(id: string | number) {
        return await this.removeItemLoader?.call(id);
    }

    @computed get list() {
        if (isPageableContent(this.listLoader.data)) {
            return this.listLoader.data.content || [];
        }

        return (this.listLoader.data || []) as any as Item[];
    }

    @computed get currentItem() {
        return this.itemLoader.data;
    }

    @action setSorting(field?: string | string[], order?: SorterDirection) {
        if (this.sorter) {
            this.sorter.setSorter(field, order);
            this.pager?.reset();
            this.loadList();
        }
    }

    @action setDefaultSorting() {
        this.sorter?.reset();
        this.pager?.reset();
        this.loadList();
    }

    @action async processPageableList() {
        if (isPageableContent(this.listLoader.data)) {
            this.pager?.setTotal(this.listLoader.data.totalElements || 0);
            if (
                this.listLoader.data.last &&
                this.listLoader.data.empty &&
                !this.listLoader.data.first
            ) {
                const totalPages = this.listLoader.data.totalPages || 1;
                const targetPage = Math.max(totalPages, 1) - 1;
                this.pager?.setPage(targetPage);
                await this.loadList(false);
            }
        }
    }
}
