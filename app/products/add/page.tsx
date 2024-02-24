import CommonContainer from '@/components/CommonContainer';
import CategoryModal from './_components/CategoryModal';
import PostContainer from './_components/PostContainer';
import { getCategories } from '@/api/categories/getCategories';

// 상품 등록 페이지
export default async function ProductWrite() {
  const categories = await getCategories();
  return (
    <CommonContainer>
      <CategoryModal />
      <PostContainer categories={categories} />
    </CommonContainer>
  );
}
