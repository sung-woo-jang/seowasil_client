import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Album from '../\bAlbum';
import { getProductDetail } from '../../../utils/api/Product/getProductDetail';
import Content from '../Content';
import { Card, CardWrapper } from './style';

function MainProduct() {
    const params = useParams<{ product_id?: string }>();
    const [productData, setProductData] = useState<ProductData>({
        id: 0,
        title: '',
        description: '',
        sellPrice: 0,
        prevPrice: 0,
        minAmount: 0,
        category: { name: '' },
        productImageUrl: { storedFileName: [''] },
    });

    const [hoverImage, setHoverImage] = useState<string>('');
    useEffect(() => {
        (async () => {
            if (params.product_id) {
                const data = await getProductDetail(params.product_id);
                setProductData(data);
                setHoverImage(data.productImageUrl.storedFileName[0]);
            }
        })();
    }, [params]);

    return (
        <CardWrapper>
            <Card>
                <Album
                    hoverImage={hoverImage}
                    productImageUrl={productData.productImageUrl}
                    setHoverImage={setHoverImage}
                />
                <Content productData={productData} />
            </Card>
        </CardWrapper>
    );
}

export default MainProduct;
