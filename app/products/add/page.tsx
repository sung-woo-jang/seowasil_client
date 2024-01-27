import CommonContainer from '@/components/CommonContainer';
import CategoryModal from './_components/CategoryModal';
import PostContainer from './_components/PostContainer';

// 상품 등록 페이지
export default function ProductWrite() {
  return (
    <CommonContainer>
      <CategoryModal />
      <PostContainer />
    </CommonContainer>
  );
}
