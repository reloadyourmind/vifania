/* eslint-disable @typescript-eslint/no-unused-vars */
export type Entity = { id?: string | number };
export type EntityId = Entity['id'];

export type BasicStoreApi<
    Item,
    UpdateData = Item,
    CreateData = Item,
    ItemDetails = Item,
> = {
    loadList?: (...args: any[]) => Promise<Item[] | PageableContent<Item>>;
    loadItem?: (...args: any[]) => Promise<ItemDetails>;
    updateItem?: (
        id: string | number,
        data: UpdateData,
    ) => Promise<Entity | undefined> | Promise<void>;
    createItem?: (
        data: CreateData,
    ) => Promise<Entity | undefined> | Promise<void>;
    removeItem?: (
        id: string | number,
    ) => Promise<Entity | undefined> | Promise<void>;
};

export type PageableContent<T> = {
    /**
     *
     * @type {Array<T>}
     */
    content?: Array<T>;
    /**
     *
     * @type {boolean}
     */
    empty?: boolean;
    /**
     *
     * @type {boolean}
     */
    first?: boolean;
    /**
     *
     * @type {boolean}
     */
    last?: boolean;
    /**
     *
     * @type {number}
     */
    number?: number;
    /**
     *
     * @type {number}
     */
    numberOfElements?: number;
    /**
     *
     * @type {number}
     */
    size?: number;
    /**
     *
     * @type {number}
     */
    totalElements?: number;
    /**
     *
     * @type {number}
     */
    totalPages?: number;
};

export function isPageableContent<T = any>(
    value?: PageableContent<T> | any,
): value is PageableContent<T> {
    if (value?.content && Array.isArray(value.content)) {
        return true;
    }

    return false;
}
