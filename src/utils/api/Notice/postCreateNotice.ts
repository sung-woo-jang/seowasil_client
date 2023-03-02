import { instance } from '../index';

interface postCreateNoticeBody {
    title: string;
    description: string;
}

export const postCreateNotice = async ({ title, description }: postCreateNoticeBody) => {
    const { data } = await instance.post(`notices`, {
        title,
        description,
    });
    return data.data;
};
