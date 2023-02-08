import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_TIME_OUT = 600 * 1000;

export const { reducer: accessTokenSliceReducer, actions } = createSlice({
    name: 'accessToken',
    initialState: {
        authenticated: false,
        accessToken: null,
        expireTime: null,
    },
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

export default accessTokenSliceReducer;
