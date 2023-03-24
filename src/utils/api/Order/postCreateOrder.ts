import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../index';

export const postCreateOrder = createAsyncThunk('order/create', async (formData: OrderInfo) => {
    const { data } = await instance.post('orders', {
        ...formData,
    });
    return data.data;
});
