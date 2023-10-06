import { User } from '@/app/practice/types';
import { axiosInstance } from './axiosInstance';

export const getUsers = async () => {
  const { data } = await axiosInstance.get('https://jsonplaceholder.typicode.com/users');
  return data as User[];
};
