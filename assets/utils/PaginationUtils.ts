import { TablePaginationConfig } from 'antd';
import { BasicStore } from 'src/utils/mobx/BasicStore/BasicStore';
import { PageSizes } from 'src/utils/mobx/Pager';

export const getPagination = (store: BasicStore<any>) => {
    if (store.pager) {
        return {
            onChange: (page: number, pageSize) => {
                store.pager?.setPage(page - 1);
                if (pageSize !== store.pager?.size) {
                    store.pager?.setPage(0);
                    store.pager?.setSize(pageSize);
                }
                store.loadList();
            },
            pageSize: store.pager.size,
            current: store.pager.page + 1,
            total: store.pager.total,
            showSizeChanger: true,
            pageSizeOptions: [
                PageSizes.size10,
                PageSizes.size20,
                PageSizes.size30,
                PageSizes.size40,
            ],
        } as TablePaginationConfig;
    }

    return false;
};
