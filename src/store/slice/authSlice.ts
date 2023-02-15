import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as authApi from '../../api/authApi';
import {
    getUserInfo,
    removeUserData,
    setAccessToken,
    setRefreshToken,
    setUserInfo,
} from '../../utils/auth/useInfo';

interface userInfo {
    id: number;
    name: string;
    phoneNumber: string;
    role: string;
    isLogin: boolean;
}

const initialState: userInfo = {
    id: 0,
    name: '',
    phoneNumber: '',
    role: '',

    isLogin: false,
};

export const TOKEN_TIME_OUT = 600 * 1000;

export const login = createAsyncThunk(
    'auth/login',
    async (formData: { account: string | undefined; password: string | undefined }) => {
        const { accessToken, refreshToken, user } = await authApi.loginApi(formData);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setUserInfo(user);
        return user;
    },
);

export const { reducer: authReducer, actions } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginCheck(state) {
            const userInfo = getUserInfo();
            if (userInfo) {
                state.isLogin = true;
                state.id = userInfo.id;
                state.name = userInfo.name;
                state.phoneNumber = userInfo.phoneNumber;
                state.role = userInfo.role;
            }
        },
        logOut(state) {
            removeUserData();
            state.isLogin = false;
            state.id = 0;
            state.name = '';
            state.phoneNumber = '';
            state.role = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isLogin = true;
            state.id = payload.id;
            state.name = payload.name;
            state.phoneNumber = payload.phoneNumber;
            state.role = payload.role;
        });
    },
});

export const { loginCheck, logOut } = actions;

export default authReducer;
