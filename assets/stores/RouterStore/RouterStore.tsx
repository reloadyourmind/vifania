import { RoutePaths } from 'assets/core/router/RoutePaths';
import { CalendarPage } from 'assets/pages/CalendarPage/CalendarPage';
import { ContactsPage } from 'assets/pages/ContactsPage/ContactsPage';
import { IndexPage } from 'assets/pages/IndexPage/IndexPage';
import { NewsPage } from 'assets/pages/NewsPage/NewsPage';
import {
    isRouteGroup,
    RouteDefinition,
} from 'assets/stores/RouterStore/RouterStore.types';
import { computed } from 'mobx';

export class RouterStoreClass {
    @computed private get routeDefinitions(): RouteDefinition[] {
        return [
            {
                key: RoutePaths.index,
                path: RoutePaths.index,
                Component: IndexPage,
                exact: true,
            },
            // {
            //     key: RoutePaths.services,
            //     path: RoutePaths.services,
            //     Component: ServicesPage,
            //     exact: true,
            //     label: <Trans t={t} i18nKey="App.Menu.Links.Services" />,
            // },
            // {
            //     key: RoutePaths.about,
            //     path: RoutePaths.about,
            //     Component: AboutPage,
            //     exact: true,
            //     label: <Trans t={t} i18nKey="App.Menu.Links.About" />,
            // },
            {
                key: RoutePaths.calendar,
                path: RoutePaths.calendar,
                Component: CalendarPage,
                exact: true,
                label: 'App.Menu.Links.Calendar',
            },
            {
                key: RoutePaths.news,
                path: RoutePaths.news,
                Component: NewsPage,
                exact: true,
                label: 'App.Menu.Links.News',
            },
            {
                key: RoutePaths.contacts,
                path: RoutePaths.contacts,
                Component: ContactsPage,
                exact: true,
                label: 'App.Menu.Links.Contacts',
            },
        ];
    }

    @computed get routes() {
        return this.routeDefinitions
            .flatMap((route) => {
                if (isRouteGroup(route)) {
                    return [route, ...(route.children || [])];
                }

                return route;
            })
            .filter(Boolean) as RouteDefinition[];
    }

    @computed get menuItems(): RouteDefinition[] {
        return this.routeDefinitions
            .filter((route) => route.label)
            .filter((route) =>
                route.available === undefined ? true : route.available,
            );
    }
}

export const RouterStore = new RouterStoreClass();
