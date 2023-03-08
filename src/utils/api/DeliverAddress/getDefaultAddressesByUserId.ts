import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../index';

export const getDefaultAddressesByUserId = createAsyncThunk(
    'deliverAddress/isDefault',
    async (user_id: number) => {
        const { data } = await instance.get(`deliver-address/isDefault/${user_id}`);
        return data.data;
    },
);
