import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../index';

export const patchDefaultAddressesByUserId = createAsyncThunk(
    'deliverAddress/patch',
    async (formData: deliverAddressInfo) => {
        const { data } = await instance.patch('deliver-address', formData);
        return data.data;
    },
);
