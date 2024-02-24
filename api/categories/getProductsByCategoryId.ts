import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/API_URL';
import { axiosInstance } from '../axiosInstance';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

interface IProductImageUrl {
  id: number;
  storedFileName: string;
}

interface IProduct {
  id: number;
  title: string;
  description: string;
  prevPrice: number;
  sellPrice: number;
  minAmount: number;
  productImageUrl: IProductImageUrl[];
}

interface ICategory {
  id: number;
  name: string;
  scientific: string;
  department: string;
}

interface IProductsByCategoryId extends ICategory {
  products: IProduct[];
}

export const getProductsByCategoryId = async (
  id: string
): Promise<IProductsByCategoryId> => {
  const { data } = await axiosInstance.get(API_URL.CATEGORIES.GET_DETAIL(id));
  return data.data;
};

export const useGetProductsByCategoryId = (id: string) =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.CATEGORIES.GET_DETAIL(id)),
    queryFn: () => getProductsByCategoryId(id),
  });
