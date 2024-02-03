'use server';

import axiosInstance from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';

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

export default async function getProductDetail(
  id: string
): Promise<IGetProductDetailResponse> {
  const { data } = await axiosInstance.get(API_URL.PRODUCTS.GET_DETAIL(id));
  return data.data;
}
