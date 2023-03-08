import { instance } from './../index';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDeleteCartThunk = createAsyncThunk('cart/delete', async (id: number) => {
    const { data } = await instance.delete(`carts/${id}`);
    return data.data;
});
