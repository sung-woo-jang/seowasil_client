import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../index';

export const deleteCategory = createAsyncThunk(
    'product/deleteCategory',
    async ({ id, index }: { id: string; index: number }) => {
        await instance.delete(`categories/${id}`);
        return index;
    },
);
