import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Album from '../\bAlbum';
import { getProductDetail } from '../../../utils/api/Product/getProductDetail';
import Content from '../Content';
import { Card, CardWrapper } from './style';

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

    useEffect(() => {
        (async () => {
            if (params.product_id) {
                const data = await getProductDetail(params.product_id);
                setImageData(data);
                setHoverImage(data.productImageUrl.storedFileName[0]);
            }
        })();
    }, [params.product_id]);

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
