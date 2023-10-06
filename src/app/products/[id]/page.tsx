'use client';
import { useState } from 'react';
import {
  Container,
  ImageContainer,
  MainImage,
  ProductImage,
  FlexContainer,
  TitleContainer,
  Description,
  Price,
  QuantityContainer,
  Quantity,
  AddToCartButton,
} from './style';

export default function Page({ params: { id } }: { params: { id: string } }) {
  const images = [
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
  ];

  const [activeImg, setActiveImage] = useState(images[0]);

  const [amount, setAmount] = useState(1);

  return (
    <div>
      <div>{id}번 상품 상세 설명 페이지</div>
      <Container>
        <ImageContainer>
          <MainImage src={activeImg} alt="" width={635} height={635} />
          {images.map((el, index) => (
            <ProductImage
              key={index}
              src={el}
              alt={`nike${index}`}
              onClick={() => setActiveImage(el)}
              width={96}
              height={96}
              priority
            />
          ))}
        </ImageContainer>
        {/* ABOUT */}
        <FlexContainer>
          <TitleContainer>
            <span>카테고리명</span>
            <h1>상상품품명명</h1>
          </TitleContainer>
          <Description>
            설명란. 설명란. 설명란. 설명란. 설명란. 설명란. 설명란. 설명란. 설명란.
            설명란. 설명란. 설명란. 설명란. 설명란. 설명란. 설명란. 설명란. 설명란.
            설명란. 설명란. 설명란. 설명란. 설명란. 설명란. 설명란. 설명란. 설명란.
            설명란. 설명란.
          </Description>
          <Price>$ 199.00</Price>
          <QuantityContainer>
            <button onClick={() => setAmount((prev) => prev - 1)}>-</button>
            <Quantity>{amount}</Quantity>
            <button onClick={() => setAmount((prev) => prev + 1)}>+</button>
          </QuantityContainer>
          <AddToCartButton>Add to Cart</AddToCartButton>
        </FlexContainer>
      </Container>
    </div>
  );
}
