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

const initalData = {
  id: 0,
  title: '',
  description: '',
  prevPrice: 0,
  sellPrice: 0,
  minAmount: 0,
  isBest: false,
  status: '',
  viewCount: 0,
  productImageUrl: [{ id: 0, storedFileName: '/images/default_product.jpg' }],
  productDetailImageUrl: [
    { id: 0, storedFileName: '/images/default_product.jpg' },
  ],
  category: {
    name: '',
    department: '',
    scientific: '',
  },
} as IGetProductDetailResponse;

const getProductDetail = async (
  id: string,
): Promise<IGetProductDetailResponse> => {
  const { data } = await axiosInstance.get(API_URL.PRODUCTS.GET_DETAIL(id));
  return data.data;
};

export const useGetProductDetail = (id: string) => {
  const { data = initalData, ...rest } = useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.PRODUCTS.GET_DETAIL(id)),
    queryFn: () => getProductDetail(id),
    enabled: id.length !== 0,
  });

  return { data, ...rest };
};
