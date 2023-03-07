import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../index';

export const postCreateAddressByUser = createAsyncThunk(
    'deliverAddress/create',
    async (formData: deliverAddressInfo) => {
        const { data } = await instance.post('deliver-address', {
            formData,
        });
        return data.data;
    },
);
