'use server';
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

export const getProductsByCategoryId = async (
  id: string
): Promise<IProductsByCategoryId> => {
  const { data } = await axiosInstance.get(API_URL.CATEGORIES.GET_DETAIL(id));
  return data.data;
};
