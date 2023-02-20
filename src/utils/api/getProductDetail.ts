import { instance } from './index';

export const getProductDetail = async (id: string) => {
    const { data } = await instance.get(`products/${id}`);
    return data.data;
};
