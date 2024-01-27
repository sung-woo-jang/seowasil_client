import CommonContainer from '@/components/CommonContainer';
import Grid from '@mui/material/Unstable_Grid2';
import ProductPreviewByCategory from './ProductPreviewByCategory';

export default async function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <CommonContainer>
      <Grid container spacing={2} columns={12}>
        {id && <ProductPreviewByCategory id={id} />}
      </Grid>
    </CommonContainer>
  );
}
