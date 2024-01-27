'use client';
import classes from './style.module.scss';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import numberWithCommas from '../../../utils/numberWithCommas';
import { useGetProductsByCategoryId } from '../../../api/categories/getProductsByCategoryId';
import storedImageUrlGenerator from '../../../utils/storedImageUrlGenerator';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductPreviewByCategory({ id }: { id: string }) {
  const {
    data: { products },
  } = useGetProductsByCategoryId(id);

  return products.map(
    ({ id, title, description, sellPrice, productImageUrl }) => (
      <Grid key={id} xs={6}>
        <div className={classes.productPreviewWrapper}>
          <Link href={`/products/${id}`}>
            <Image
              src={storedImageUrlGenerator(productImageUrl[0]?.storedFileName)}
              alt={'name'}
              // effect="blur"
              width={200}
              height={200}
            />
          </Link>
          <div className={classes.productPreviewInfo}>
            <Link href={`/products/${id}`}>
              <div className={classes.productTitle}>{title}</div>
            </Link>

            <Typography>{description}</Typography>
            <div className={classes.infoFooter}>
              <div>
                <div className={classes.productPrice}>
                  {numberWithCommas(sellPrice)}원
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    ),
  );
}
