import axios from 'axios';
import errorUtils from '@utils/error';

const api = axios.create({
    baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(
            errorUtils.exceptionConvert.errorResponseAxios(error),
        );
    },
);

api.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        return Promise.reject(
            errorUtils.exceptionConvert.errorResponseAxios(err),
        );
    },
);

export default api;
