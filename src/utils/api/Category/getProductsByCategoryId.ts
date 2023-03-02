import { instance } from '../index';

export const getProductsByCategoryId = async (id: string) => {
    const { data } = await instance.get(`categories/${id}`);
    return data.data;
};
