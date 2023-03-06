import { instance } from '../index';

interface getProductResponseData {
    id: number;
    title: string;
    description: string;
    prevPrice: number;
    sellPrice: number;
    minAmount: number;
    category: { name: string };
    productImageUrl: { storedFileName: string[] };
}

export const getProductDetail = async (id: string): Promise<getProductResponseData> => {
    const { data } = await instance.get(`products/${id}`);
    return data.data;
};
