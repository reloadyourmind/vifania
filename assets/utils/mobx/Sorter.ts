import { action, observable } from 'mobx';
import { getPropertyPathAsProp } from 'src/utils/ObjectHelper';

export type SorterDirection = 'ascend' | 'descend' | null;
export class Sorter<T = any> {
    @observable order?: SorterDirection;
    @observable field?: keyof T | Array<keyof T>;

    constructor(
        private defaultField?: keyof T | Array<keyof T>,
        private defaultOrder: SorterDirection = 'ascend',
    ) {
        this.reset();
    }

    @action setSorter(
        field?: keyof T | Array<keyof T>,
        order?: SorterDirection,
    ) {
        this.order = order;
        this.field = field;
    }

    @action reset() {
        this.setSorter(this.defaultField, this.defaultOrder);
    }

    getSort() {
        if (!this.field || !this.order) {
            return undefined;
        }

        return [
            `${getPropertyPathAsProp(this.field as any)},${
                SorterDirectionToServerSortDirectionMap[this.order]
            }`,
        ];
    }
}

const SorterDirectionToServerSortDirectionMap = {
    ascend: 'ASC',
    descend: 'DESC',
};
