const setItem = (key: string, data: any) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.warn(error);
    }
};

const getItem = <T = any>(key: string) => {
    try {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data) as T;
        }
    } catch (error) {
        console.warn(error);
    }
};

export const LocalStoreHelper = {
    setItem,
    getItem,
};
