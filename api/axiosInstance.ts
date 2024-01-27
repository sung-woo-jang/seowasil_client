import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL } from '../constants/API_URL';
import { useEffectOnce } from 'usehooks-ts';

const config: AxiosRequestConfig = {
  baseURL: `${API_URL.BASE_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

interface Props {
  children: JSX.Element;
}

function AxiosInterceptor({ children }: Props) {
  useEffectOnce(() => {
    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  });
  return children;
}
const axiosInstance: AxiosInstance = axios.create(config);
export default axiosInstance;
export { AxiosInterceptor };
