import { useEffect, useState } from 'react';
import { getProductDetail } from '../utils/api/Product/getProductDetail';

interface ProductData {
    id: number;
    title: string;
    description: string;
    sellPrice: number;
    prevPrice: number;
    minAmount: number;
    category: { name: string };
    productImageUrl: { storedFileName: string[] };
}

export const useProductData = (params?: string) => {
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

    useEffect(() => {
        const fetchProductData = async () => {
            if (params) {
                const data = await getProductDetail(params);
                setProductData(data);
            }
        };

        fetchProductData();
    }, [params]);

    return productData;
};
