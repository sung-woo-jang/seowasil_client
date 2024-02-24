import CommonContainer from '@/components/CommonContainer';
import CategoryModal from './_components/CategoryModal';
import PostContainer from './_components/PostContainer';
import { getCategories } from '@/api/categories/getCategories';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import getQueryClient from '@/provider/getQueryClient';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

// 상품 등록 페이지
export default async function ProductWrite() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: generateQueryKeysFromUrl(API_URL.CATEGORIES.GET_LIST),
    queryFn: getCategories,
  });

  return (
    <CommonContainer>
      <CategoryModal />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostContainer />
      </HydrationBoundary>
    </CommonContainer>
  );
}
