import { createSlice } from '@reduxjs/toolkit';

// 상품등록 관련 slice
export interface ContactState {
    id: number; // Contact Id
    title: string;
    description: string;
    name: string;
    password: string;
    category: string;
}

const initialState: ContactState = {
    id: 0,
    title: '',
    description: '',
    name: '',
    password: '',
    category: '',
};

export const { reducer: contactReducer, actions } = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});

// export const {} = actions;

export default contactReducer;
