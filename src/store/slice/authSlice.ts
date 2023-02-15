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

// createAsyncThunk는 비동기 작업을 처리하는 액션을 만들어준다.
export const asyncLoginFetch = createAsyncThunk(
    'auth/login',
    async (formData: { account: string | undefined; password: string | undefined }) => {
        const { accessToken, refreshToken, user } = await authApi.loginApi(formData);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setUserInfo(user);
        return user;
    },
);

export const asyncSignUpFetch = createAsyncThunk('auth/signup', async (formData) => {
    const response = await authApi;
});

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
        builder.addCase(asyncLoginFetch.fulfilled, (state, { payload }) => {
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
