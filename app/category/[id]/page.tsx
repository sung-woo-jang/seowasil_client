import CommonContainer from '@/components/CommonContainer';
import Grid from '@mui/material/Unstable_Grid2';
import { getProductsByCategoryId } from '@/api/categories/getProductsByCategoryId';

import getQueryClient from '@/provider/getQueryClient';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import Products from './Products';

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.CATEGORIES.GET_DETAIL(id)),
    queryFn: () => getProductsByCategoryId(id),
  });
  return (
    <CommonContainer>
      <Grid container spacing={2} columns={12}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Products id={id} />
        </HydrationBoundary>
      </Grid>
    </CommonContainer>
  );
}
