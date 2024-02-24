import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/API_URL';
import { axiosInstance } from '../axiosInstance';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';

interface ImageUrl {
  id: number;
  storedFileName: string;
}

interface Category {
  name: string;
  scientific: string;
  department: string;
}

export interface IGetProductDetailResponse {
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
  productDetailImageUrl: ImageUrl[];
  category: Category;
}

export const getProductDetail = async (
  id: string
): Promise<IGetProductDetailResponse> => {
  const { data } = await axiosInstance.get(API_URL.PRODUCTS.GET_DETAIL(id));
  return data.data;
};

export const useGetProductDetail = (id: string) =>
  useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.PRODUCTS.GET_DETAIL(id)),
    queryFn: () => getProductDetail(id),
  });
