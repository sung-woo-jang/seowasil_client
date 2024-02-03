'use server';

import axiosInstance from '@/api/axiosInstance';
import { API_URL } from '@/constants/API_URL';

interface ICreateProductBody {
  title: string;
  description: string;
  sellPrice: number;
  minAmount: number;
  categoryId: number;
  productImages: FileList | File[];
  detailImages: FileList | File[];
}

export default async function createProduct(body: ICreateProductBody) {
  const formData = new FormData();

  // 기존 body 데이터 추가
  Object.entries(body).forEach(([key, value]) => {
    if (key !== 'productImages' && key !== 'detailImages') {
      formData.append(key, value);
    }
  });

  // productImages 추가
  for (let i = 0; i < body.productImages.length; i++) {
    formData.append('productImages', body.productImages[i]);
  }

  // detailImages 추가
  for (let i = 0; i < body.detailImages.length; i++) {
    formData.append('detailImages', body.detailImages[i]);
  }

  const { data } = await axiosInstance.post(API_URL.PRODUCTS.CREATE, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
}
