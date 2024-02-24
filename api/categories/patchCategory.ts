import { API_URL } from '../../constants/API_URL';
import { axiosInstance } from '../axiosInstance';

export const patchCategory = async (id: string) => {
  const { data } = await axiosInstance.patch(API_URL.CATEGORIES.PATCH(id));
  return data;
};
