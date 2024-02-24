import { dehydrate } from '@tanstack/query-core';
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from './select';
import classes from './styles.module.scss';
import ProductCard from '@/components/ProductCard';
import { HydrationBoundary } from '@tanstack/react-query';
import getQueryClient from '@/provider/getQueryClient';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import { getProducts } from '@/api/products/getProducts';

export async function ProductLists() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.PRODUCTS.GET_LIST),
    queryFn: getProducts,
  });
  return (
    <>
      <div className={classes.selectBox}>
        <h1 className="text-2xl font-bold">인기 상품</h1>
        <Select>
          <SelectTrigger id="sort" style={{ width: '50%' }}>
            <SelectValue placeholder="최신순" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="latest">최신순</SelectItem>
            <SelectItem value="popularity">인기순</SelectItem>
            <SelectItem value="price-low-high">가격 낮은순</SelectItem>
            <SelectItem value="price-high-low">가격 높은순</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductCard />
      </HydrationBoundary>
    </>
  );
}
