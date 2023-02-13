import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 600 * 1000;

const initialState = {
    id: 0,
    name: '',
    phoneNumber: '',
    role: '',
    isLogin: false,
};

export const { reducer: selectedUserReducer, actions } = createSlice({
    name: 'selectedUser',
    initialState,
    reducers: {
        setSelectedUser: (state, { payload: { id, name, phoneNumber, role } }) => ({
            id,
            name,
            phoneNumber,
            role,
            isLogin: true,
        }),
    },
});

export const { setSelectedUser } = actions;

export default selectedUserReducer;
