import axios, { AxiosInstance } from 'axios';
import http from 'http';

const httpAgent = new http.Agent();

export const instance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    httpAgent,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const formInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});
