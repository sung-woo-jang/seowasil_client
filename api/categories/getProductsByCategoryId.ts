import { useQuery } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '../../utils/generateQueryKeysFromUrl';
import { API_URL } from '../../constants/API_URL';
import axiosInstance from '../axiosInstance';

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

const getProductsByCategoryId = async (id: string): Promise<IProductsByCategoryId> => {
  const { data } = await axiosInstance.get(API_URL.CATEGORIES.GET_DETAIL(id));
  return data.data;
};

const initalData = {
  id: 0,
  name: '',
  scientific: '',
  department: '',
  products: [
    {
      id: 0,
      title: '',
      description: '',
      prevPrice: 0,
      sellPrice: 0,
      minAmount: 0,
      productImageUrl: [
        {
          id: 0,
          storedFileName: 'default_product.jpg',
        },
      ],
    },
  ],
} as IProductsByCategoryId;

export const useGetProductsByCategoryId = (id: string) => {
  const { data = initalData, ...rest } = useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.CATEGORIES.GET_DETAIL(id)),
    queryFn: () => getProductsByCategoryId(id),
    enabled: id !== undefined,
  });

  return { data, ...rest };
};
