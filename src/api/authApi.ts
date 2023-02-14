import { instance } from './index';

interface loginApiResponseData {
    accessToken: string;
    refreshToken: string;
    user: { id: number; name: string; phoneNumber: string; role: string };
}

export const loginApi = async (formData: {
    account: string | undefined;
    password: string | undefined;
}): Promise<loginApiResponseData> => {
    const { data } = await instance.post('users/signin', formData);
    return data.data;
};
