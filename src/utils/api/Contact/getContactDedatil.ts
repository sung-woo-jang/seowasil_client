import { instance } from '../index';

export const getContactDetail = async (id: number, password: string) => {
    const { data } = await instance.get(`contacts/detail?id=${id}&password=${password}`);
    return data.data;
};
