import { createAsyncThunk } from '@reduxjs/toolkit';
import { CartsState } from '../../../store/slice/cartSlice';
import { instance } from '../index';

export const getCartByUserAsyncThunk = createAsyncThunk(
    'cart/getByUser',
    async (userId: number): Promise<CartsState[]> => {
        const { data } = await instance.get(`carts/${userId}`);
        return data.data;
    },
);
