import ProductPreview from '@/components/ProductPreview/ProductPreview';
import Grid from '@mui/material/Unstable_Grid2';

// 카테고리별 상품페이지
export default function Page({ params: { category } }: { params: { category: string } }) {
  const arr = [1, 2, 3, 4, 5];
  return (
    <Grid container spacing={2} columns={12}>
      <Grid xs={6}>{category}</Grid>
      {arr.map((el) => (
        <Grid key={el} xs={6}>
          <ProductPreview />
        </Grid>
      ))}
    </Grid>
  );
}
