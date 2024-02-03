'use client';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../../constants/API_URL';
import { generateQueryKeysFromUrl } from '../../../utils/generateQueryKeysFromUrl';
import getProducts, { IGetProductsResponse } from '../server/getProducts';

export default function useGetProducts() {
  const result = useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.PRODUCTS.GET_LIST),
    queryFn: getProducts,
  });

  return result;
}
