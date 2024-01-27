import classes from './styles.module.scss';
import storedImageUrlGenerator from '@/utils/storedImageUrlGenerator';
import Image from 'next/image';
import CommonContainer from '@/components/CommonContainer';

interface IProductGridProps {
  productDetailImageUrl: {
    id: number;
    storedFileName: string;
  }[];
}

export default function VerticalGallery({ productDetailImageUrl }: IProductGridProps) {
  return (
    <CommonContainer>
      <div style={{ marginTop: '10rem' }}>
        {productDetailImageUrl.map(({ id, storedFileName }) => (
          <Image
            className={classes.CustomImage}
            key={id}
            src={storedImageUrlGenerator(storedFileName)}
            alt={`상품명_${'상세사진'}`}
            // width={100}
            // height={100}
            fill
          />
        ))}
      </div>
    </CommonContainer>
  );
}
