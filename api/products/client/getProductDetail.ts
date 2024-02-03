'use client';
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../../../constants/API_URL';
import { generateQueryKeysFromUrl } from '../../../utils/generateQueryKeysFromUrl';
import getProductDetail, { IGetProductDetailResponse } from '../server/getProductDetail';

export default function useGetProductDetail(
  id: string,
  initialData: IGetProductDetailResponse
) {
  const { data, ...rest } = useQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.PRODUCTS.GET_DETAIL(id)),
    queryFn: () => getProductDetail(id),
    enabled: id.length !== 0,
    initialData,
  });

  return { data, ...rest };
}
