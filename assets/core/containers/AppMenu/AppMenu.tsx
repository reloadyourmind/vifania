import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { RouterStore } from 'assets/stores/RouterStore/RouterStore';
import { RouteDefinition } from 'assets/stores/RouterStore/RouterStore.types';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { matchPath, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

type AppMenuProps = {
    theme?: 'dark';
};

export const AppMenu = observer(({ theme }: AppMenuProps) => {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState<string[]>();

    useEffect(() => {
        const keys = RouterStore.routes
            .filter((route) => {
                return matchPath(location.pathname, {
                    exact: false,
                    path: route.path,
                });
            })
            .map((route) => route?.key);

        setSelectedKeys(keys);
    }, [location.pathname]);

    return (
        <StyledMenu
            theme={theme}
            openKeys={selectedKeys}
            selectedKeys={selectedKeys}
            mode="horizontal"
            items={RouterStore.menuItems.map((route) => getMenuItem(route))}
        />
    );
});

const getMenuItem = (route: RouteDefinition): ItemType => {
    const label = <NavLink to={route.path}>{route.label as any}</NavLink>;

    return {
        key: route.key,
        icon: route.icon,
        label,
    };
};

const StyledMenu = styled(Menu as any)`
    width: 100%;
    padding: 0 16px;
`;
