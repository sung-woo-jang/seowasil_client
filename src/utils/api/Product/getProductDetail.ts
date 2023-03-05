import { instance } from '../index';

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

export const getProductDetail = async (id: string): Promise<productData> => {
    const { data } = await instance.get(`products/${id}`);
    return data.data;
};
