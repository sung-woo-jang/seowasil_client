import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../index';

export const postCreateOrder = createAsyncThunk(
    'order/create',
    async (formData: deliverAddressInfo) => {
        const { data } = await instance.post('order', {
            formData,
        });
        return data.data;
    },
);
