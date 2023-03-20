import { instance } from '../index';

export interface responseContactDetail {
    id: number;
    title: string;
    description: string;
    name: string;
    password: string;
    category: string;
}

export const getContactDetail = async (id: number | string): Promise<responseContactDetail> => {
    const { data } = await instance.get(`contacts/${id}`);
    return data.data;
};
