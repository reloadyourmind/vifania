import React from 'react';

export type RouteItem = {
    icon?: React.ReactNode;
    label?: React.ReactNode;
    description?: React.ReactNode;
    Component?: any;
    key: string;
    path: string;
    available?: boolean;
    exact?: boolean;
    linkToCreate?: string;
};

export type RouteGroup = {
    icon?: React.ReactNode;
    label?: React.ReactNode;
    description?: React.ReactNode;
    Component?: any;
    key: string;
    path: string;
    menuLink?: string;
    exact?: boolean;
    type: 'group';
    available?: boolean;

    children?: RouteItem[];
};

export type RouteDefinition = RouteItem | RouteGroup;

export const isRouteGroup = (route: RouteDefinition): route is RouteGroup => {
    return Boolean((route as any)?.children);
};
