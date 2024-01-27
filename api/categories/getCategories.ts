import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '../../utils/generateQueryKeysFromUrl';
import { API_URL } from '../../constants/API_URL';
import axiosInstance from '../axiosInstance';

export interface ICategory {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  scientific: string;
  department: string;
}

export const getCategories = async (): Promise<ICategory[]> => {
  const { data } = await axiosInstance.get(API_URL.CATEGORIES.GET_LIST);
  return data.data;
};

const mapCategories = (data: ICategory[]) => [
  {
    id: 10000,
    name: `Home`,
    menu_item: null,
    link: '/',
  },
  ...data.map(({ id, name }) => ({
    id,
    name,
    menu_item: null,
    link: `/category/${id}`,
  })),
  {
    id: 10001,
    name: `문의사항`,
    menu_item: null,
    link: 'contact',
  },
];

export const useGetCategories = (initialData: ICategory[]) =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.CATEGORIES.GET_LIST),
    queryFn: getCategories,
    select: mapCategories,
    initialData,
  });
