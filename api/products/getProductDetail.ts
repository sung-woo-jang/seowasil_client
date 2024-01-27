import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../constants/API_URL';
import { generateQueryKeysFromUrl } from '../../utils/generateQueryKeysFromUrl';
import axiosInstance from '../axiosInstance';

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

export const useGetProductDetail = (
  id: string,
  initialData: IGetProductDetailResponse
) => {
  const { data, ...rest } = useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.PRODUCTS.GET_DETAIL(id)),
    queryFn: () => getProductDetail(id),
    enabled: id.length !== 0,
    initialData,
  });

  return { data, ...rest };
};
