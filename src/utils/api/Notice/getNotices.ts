import { instance } from '../index';

export interface responseNotices {
    id: number;
    title: string;
    description: string;
}

export const getNotices = async (): Promise<responseNotices[]> => {
    const { data } = await instance.get('notices');
    return data.data;
};
