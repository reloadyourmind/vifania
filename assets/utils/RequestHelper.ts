import { AxiosPromise } from 'axios';

const unwrapFromAxiosPromise = <T = any>(axiosPromise: AxiosPromise<T>) => {
    return axiosPromise
        .then((resp) => resp.data)
        .catch((error) => Promise.reject(error));
};

export const RequestHelper = {
    unwrapFromAxiosPromise,
};
