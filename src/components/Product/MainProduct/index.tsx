import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../../utils/api/getProductDetail';
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

interface productData {
    id: number;
    title: string;
    description: string;
    sellPrice: number;
    prevPrice: number;
    minAmount: number;
    category: { name: string };
    productImageUrl: { storedFileName: string[] };
}

function MainProduct() {
    const [
        { title, description, sellPrice, prevPrice, minAmount, category, productImageUrl },
        setImageData,
    ] = useState<productData>({
        id: 0,
        title: '',
        description: '',
        sellPrice: 0,
        prevPrice: 0,
        minAmount: 0,
        category: { name: '' },
        productImageUrl: { storedFileName: [''] },
    });
    const params = useParams();

    const [hoverImage, setHoverImage] = useState<string>('');

    const handleClick = (index: number) => {
        const imageSlider = productImageUrl.storedFileName[index];
        setHoverImage(imageSlider);
    };

    useEffect(() => {
        (async () => {
            if (params.product_id) {
                const data = await getProductDetail(params.product_id);
                setImageData(data);
                setHoverImage(data.productImageUrl.storedFileName[0]);
            }
        })();
    }, []);

    return (
        <CardWrapper>
            <Card>
                <ProductImages>
                    <ImageDisplay>
                        <ImageShowcase>
                            <img
                                src={`${process.env.REACT_APP_AWS_URL}${hoverImage}`}
                                alt="{나무이름} 사진"
                            />
                        </ImageShowcase>
                    </ImageDisplay>

                    <ImageSelect>
                        {productImageUrl.storedFileName.map((url, index: number) => (
                            <ImageItem key={index}>
                                <img
                                    key={index}
                                    src={`${process.env.REACT_APP_AWS_URL}${url}`}
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
                    <ProductTitle>{title}</ProductTitle>
                    <ProductPrice>
                        <LastPrice>
                            이전 가격: <span>{prevPrice}원</span>
                        </LastPrice>
                        <NewPrice>
                            현재 가격:
                            <span>
                                {sellPrice}원 (-
                                {prevPrice - sellPrice}원)
                            </span>
                        </NewPrice>
                    </ProductPrice>
                    <ProductDetail>
                        <h2>나무 종류: {category.name}</h2>
                        <p>{description}</p>
                        <ul>
                            <li>
                                과명: <span>ㅇㅇ나무과</span>
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
