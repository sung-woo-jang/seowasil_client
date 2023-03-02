import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../index';

export const postCreateCategory = createAsyncThunk('product/category', async (name: string) => {
    const { data } = await instance.post('categories', {
        name,
    });
    return data.data;
});
