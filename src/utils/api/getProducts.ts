import { instance } from './index';

export const getProducts = async () => {
    const { data } = await instance.get(`products`);
    return data.data;
};
