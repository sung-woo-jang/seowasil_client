import { instance } from '../index';

interface loginApiResponseData {
    accessToken: string;
    refreshToken: string;
    user: {
        id: number;
        name: string;
        phoneNumber: string;
        role: string;
    };
}

export const login = async (formData: {
    account: string | undefined;
    password: string | undefined;
}): Promise<loginApiResponseData> => {
    const { data } = await instance.post('users/signin', formData);
    return data.data;
};

export const signupApi = async (formData: signupFormData) => {
    const { data } = await instance.post('users/signup', formData);
    return data.data;
};
