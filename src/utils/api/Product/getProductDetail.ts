import { instance } from '../index';

export const getProductDetail = async (id: string): Promise<ProductData> => {
    const { data } = await instance.get(`products/${id}`);
    return data.data;
};
