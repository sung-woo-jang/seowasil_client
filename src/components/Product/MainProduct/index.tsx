import { useState } from 'react';
import {
    Card,
    CardWrapper,
    ImageDisplay,
    ImageItem,
    ImageSelect,
    ImageShowcase,
    LastPrice,
    NewPrice,
    ProductContent,
    ProductDetail,
    ProductImages,
    ProductPrice,
    ProductTitle,
} from './style';

const images = [
    {
        id: 1,
        url: `${process.env.PUBLIC_URL}/images/문그로우.jpg`,
    },
    {
        id: 2,
        url: `${process.env.PUBLIC_URL}/images/문그로우1.jpg`,
    },
    {
        id: 3,
        url: `${process.env.PUBLIC_URL}/images/문그로우2.jpg`,
    },
    {
        id: 4,
        url: `${process.env.PUBLIC_URL}/images/문그로우3.jpg`,
    },
    {
        id: 6,
        url: `${process.env.PUBLIC_URL}/images/문그로우5.jpg`,
    },
];

function MainProduct() {
    const [imageData, setImageData] = useState(images[0]);

    const handleClick = (index: number) => {
        const imageSlider = images[index];
        setImageData(imageSlider);
    };

    return (
        <CardWrapper>
            <Card>
                <ProductImages>
                    <ImageDisplay>
                        <ImageShowcase>
                            <img src={imageData.url} alt="{나무이름} 사진" />
                        </ImageShowcase>
                    </ImageDisplay>

                    <ImageSelect>
                        {images.map(({ id, url }, index: number) => (
                            <ImageItem key={id}>
                                <img
                                    key={id}
                                    src={url}
                                    alt="{나무이름} 사진"
                                    onMouseEnter={() => {
                                        handleClick(index);
                                    }}
                                />
                            </ImageItem>
                        ))}
                    </ImageSelect>
                </ProductImages>
                <ProductContent>
                    <ProductTitle>나무이름</ProductTitle>
                    <ProductPrice>
                        <LastPrice>
                            이전 가격: <span>3000원</span>
                        </LastPrice>
                        <NewPrice>
                            현재 가격: <span>2000원 (-1000원)</span>
                        </NewPrice>
                    </ProductPrice>
                    <ProductDetail>
                        <h2>{`나무이름`}</h2>
                        <p>{`상품 설명`}</p>
                        <ul>
                            <li>
                                과명: <span>측백나무과</span>
                            </li>

                            <li>
                                학명: <span>Thuja occidentalis</span>
                            </li>
                            <li>
                                영명: <span>Fastigiata</span>
                            </li>
                            <li>
                                기타: <span>등등</span>
                            </li>
                            <li>
                                기타: <span>등등</span>
                            </li>
                        </ul>
                    </ProductDetail>
                </ProductContent>
            </Card>
        </CardWrapper>
    );
}

export default MainProduct;
