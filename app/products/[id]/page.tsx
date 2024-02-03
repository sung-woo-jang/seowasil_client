import { getProductDetail } from '@/api/products/getProductDetail';
import VerticalGallery from './VerticalGallery';
import classes from './styles.module.scss';
import { ProductDescription } from './ProductDescription';
import RecommendedProducts from '@/components/RecommendedProducts';

interface PageProps {
  params: { id: string };
}
export default async function Page({ params: { id } }: PageProps) {
  const initialData = await getProductDetail(id);

  return (
    <div className={classes.container}>
      <ProductDescription initialData={initialData} params={id} />

      <VerticalGallery productDetailImageUrl={initialData.productDetailImageUrl} />

      {/* 상품 추천 */}
      <RecommendedProducts title="추천 상품" />
    </div>
  );
}
