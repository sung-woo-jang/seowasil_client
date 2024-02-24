import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL } from '../constants/API_URL';

const createAxiosInstance = (contentType: string): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL: `${API_URL.BASE_URL}/api`,
    withCredentials: true,
    headers: {
      'Content-Type': contentType,
    },
  };

  const instance: AxiosInstance = axios.create(config);

  return instance;
};

export const axiosInstance: AxiosInstance = createAxiosInstance('application/json');
export const formInstance: AxiosInstance = createAxiosInstance('multipart/form-data');
