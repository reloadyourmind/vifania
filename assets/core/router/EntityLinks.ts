import { RoutePaths } from 'assets/core/router/RoutePaths';
import { UrlHelper } from 'assets/utils/UrlHelper';

type Links = {
    list: () => string;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    itemDetails: (id?: string | number) => string;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    itemEdit?: (id?: string | number) => string;
};

type EntityNames = 'news';

const generatePath = (path: string, params: Record<string, any>) => {
    return UrlHelper.getTargetUrl(path, params);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const EntityLinks: { [key in EntityNames]: Links } = {
    news: {
        list: () => RoutePaths.news,
        itemDetails: (id) =>
            generatePath(RoutePaths.newsDetails, {
                itemId: id,
            }),
    },
};
