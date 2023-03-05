import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Album from '../\bAlbum';
import { useProductData } from '../../../hooks/useProductData';
import Content from '../Content';
import { Card, CardWrapper } from './style';

function MainProduct() {
    const params = useParams<{ product_id?: string }>();
    const { title, description, category, minAmount, prevPrice, sellPrice, productImageUrl } =
        useProductData(params.product_id);

    const [hoverImage, setHoverImage] = useState<string>('');

    return (
        <CardWrapper>
            <Card>
                <Album
                    hoverImage={hoverImage}
                    productImageUrl={productImageUrl}
                    setHoverImage={setHoverImage}
                />
                <Content
                    title={title}
                    description={description}
                    sellPrice={sellPrice}
                    prevPrice={prevPrice}
                    minAmount={minAmount}
                    category={category}
                />
            </Card>
        </CardWrapper>
    );
}

export default MainProduct;
