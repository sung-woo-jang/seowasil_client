import { createSlice } from '@reduxjs/toolkit';

type accessToken = {
    authenticated: boolean;
    accessToken: string | null;
    expireTime: Date | number | null;
};

const initState: accessToken = {
    authenticated: false,
    accessToken: null,
    expireTime: null,
};

export const TOKEN_TIME_OUT = 600 * 1000;

export const { reducer: accessTokenReducer, actions } = createSlice({
    name: 'accessToken',
    initialState: initState,
    reducers: {
        SET_TOKEN: (state, action) => {
            state.authenticated = true;
            state.accessToken = action.payload;
            state.expireTime = new Date().getTime() + TOKEN_TIME_OUT;
        },
        DELETE_TOKEN: (state) => {
            state.authenticated = false;
            state.accessToken = null;
            state.expireTime = null;
        },
    },
});

export const { SET_TOKEN, DELETE_TOKEN } = actions;

export default accessTokenReducer;
