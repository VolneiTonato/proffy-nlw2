import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.20:3333',
});

const errorResponseAxios = (err: any) => {
    if (err?.response?.data)
        if (Array.isArray(err.response.data)) {
            throw new Error(
                err?.response?.data
                    ?.map((error: { message: string }) => error.message)
                    .join('|'),
            );
        } else {
            throw new Error(err.response.data?.message || String(err));
        }
    throw new Error(err);
};

api.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(errorResponseAxios(error));
    },
);

api.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        return Promise.reject(errorResponseAxios(err));
    },
);

export default api;
