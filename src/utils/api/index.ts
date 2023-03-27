import axios, { AxiosInstance, AxiosResponse } from 'axios';

export const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        // AccessToken이 만료된 경우, RefreshToken으로 AccessToken을 갱신하고 특정 API를 요청함
        if (error.response && error.response.status === 403)
            return instance
                .get('/users/refresh')
                .then((res) => {})
                .catch((error) => {
                    return Promise.reject(error);
                });
        else return Promise.reject(error);
    },
);

export const formInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});
