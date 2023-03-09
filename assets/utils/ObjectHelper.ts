export const getValueByPath = (source: any, path: string | string[]) => {
    if (Array.isArray(path)) {
        return path.reduce((obj: any, key) => obj[key], source);
    }

    return source[path];
};

export const getPropertyPathAsProp = (path: string | string[] | undefined) => {
    if (!path || typeof path === 'string') {
        return path;
    }

    return path.join('.');
};
