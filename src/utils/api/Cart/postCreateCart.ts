import { instance } from './../index';
import { createAsyncThunk } from '@reduxjs/toolkit';
interface postCreateCartData {
    amount: string | number;
    product_id: string | number;
    user_id: string | number;
}

export const fetchCreateCartThunk = createAsyncThunk(
    'cart/create',
    async (body: postCreateCartData) => {
        const { data } = await instance.post('carts', body);
        return data.data;
    },
);
