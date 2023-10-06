'use client';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import numberWithCommas from '@/utils/numberWithCommas';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
// CSS
import * as S from './style';
import Link from 'next/link';
import Image from 'next/image';

const ProductPreview = () => {
  const [detailShow, setDetailShow] = useState(false);

  return (
    <S.ProductPreviewWrapper>
      <Link href={`/products/${1}`}>
        <Image
          src="https://res.cloudinary.com/dfdnn20e7/image/upload/v1685124680/uajohsg8q6wwfvtbrw6q.avif"
          alt={'name'}
          // effect="blur"
          width={200}
          height={200}
        />
      </Link>
      <S.ProductPreviewInfo>
        <Link href={`/product-detail/${1}`}>
          <S.ProductTitle>상품명</S.ProductTitle>
        </Link>
        <S.ProductDescriptionToggle onClick={() => setDetailShow((prev) => !prev)}>
          <span>상세정보 보기</span> {detailShow ? <NorthIcon /> : <SouthIcon />}
        </S.ProductDescriptionToggle>
        {detailShow && (
          <Card.Text>
            {'상품 설명 상품 설명 상품 설명 상품 설명 상품 설명 상품 설명'}
          </Card.Text>
        )}
        <S.InfoFooter>
          <div>
            <S.ProductPrice>{numberWithCommas(1600000)}원</S.ProductPrice>
          </div>
        </S.InfoFooter>
      </S.ProductPreviewInfo>
    </S.ProductPreviewWrapper>
  );
};

export default ProductPreview;
