import { saveUserInfoToLocalStorage } from './../../auth/useInfo';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../index';

interface loginApiResponseData {
    id: number;
    name: string;
    phoneNumber: string;
    role: string;
}

export const asyncLoginFetch = createAsyncThunk(
    'auth/login',
    async (formData: {
        account: string | undefined;
        password: string | undefined;
    }): Promise<loginApiResponseData> => {
        const { data } = await instance.post('users/signin', formData);
        saveUserInfoToLocalStorage(data.data);

        return data.data;
    },
);

export const asyncSignupFetch = async (formData: signupFormData) => {
    const { data } = await instance.post('users/signup', formData);
    return data.data;
};

export const asyncLogOutFetch = createAsyncThunk('users/logout', async () => {
    const { data } = await instance.post('users/logout');
    return data;
});
