import { instance } from './index';

export const getContacts = async () => {
    const { data } = await instance.get('contacts');
    return data.data;
};
