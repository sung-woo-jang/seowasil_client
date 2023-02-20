import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from './index';

export const getCategories = createAsyncThunk('product/categories', async () => {
    const { data } = await instance.get('categories');
    return data.data;
});
