import { useMutation } from '@tanstack/react-query';
import { API_URL } from '../../constants/API_URL';
import axiosInstance from '../axiosInstance';

interface ICreateCategoryBody {
  name: string;
  scientific: string;
  department: string;
}

const createCategory = async (body: ICreateCategoryBody) => {
  const { data } = await axiosInstance.post(API_URL.CATEGORIES.CREATE, body);
  return data;
};

export default function useCreatgeCategoryMutation(callBackFn: () => void) {
  const result = useMutation({
    mutationFn: createCategory,
    onSuccess() {
      callBackFn();
    },
  });
  return result;
}
