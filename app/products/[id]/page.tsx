import { getProductDetail } from '@/api/products/getProductDetail';
import VerticalGallery from './VerticalGallery';
import classes from './styles.module.scss';
import { ProductDescription } from './ProductDescription';
import getQueryClient from '@/provider/getQueryClient';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

interface PageProps {
  params: { id: string };
}
export default async function Page({ params: { id } }: PageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.PRODUCTS.GET_DETAIL(id)),
    queryFn: () => getProductDetail(id),
  });

  return (
    <div className={classes.container}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductDescription params={id} />

        <VerticalGallery params={id} />
      </HydrationBoundary>
    </div>
  );
}
