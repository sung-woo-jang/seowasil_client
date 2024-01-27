import { API_URL } from '../../constants/API_URL';
import axiosInstance from '../axiosInstance';

export const deleteCategory = async (id: string) => {
  const { data } = await axiosInstance.delete(API_URL.CATEGORIES.DELETE(id));
  return data;
};
