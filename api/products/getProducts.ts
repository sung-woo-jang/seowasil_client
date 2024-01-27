import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/API_URL';
import axiosInstance from '../axiosInstance';
import { generateQueryKeysFromUrl } from '../../utils/generateQueryKeysFromUrl';

interface ImageUrl {
  id: number;
  storedFileName: string;
}

interface Category {
  name: string;
  scientific: string;
  department: string;
}

export interface IGetProductsResponse {
  id: number;
  title: string;
  description: string;
  prevPrice: number;
  sellPrice: number;
  minAmount: number;
  isBest: boolean;
  status: string;
  viewCount: number;
  productImageUrl: ImageUrl[];
  // productDetailImageUrl: ImageUrl[];
  category: Category;
}

export const getProducts = async (): Promise<IGetProductsResponse[]> => {
  const { data } = await axiosInstance.get(API_URL.PRODUCTS.GET_LIST);
  return data.data;
};

export const useGetProducts = (initialData: IGetProductsResponse[]) => {
  const result = useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.PRODUCTS.GET_LIST),
    queryFn: getProducts,
    initialData,
  });

  return result;
};
