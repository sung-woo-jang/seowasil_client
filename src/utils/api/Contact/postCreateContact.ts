import { instance } from '../index';

export const postCreateContact = async ({
    title,
    description,
    name,
    password,
}: {
    title: string;
    description: string;
    name: string;
    password: string;
}) => {
    const { data } = await instance.post(`contacts`, {
        title,
        description,
        name,
        password,
    });
    return data.data;
};
