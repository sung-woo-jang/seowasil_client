import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as authApi from '../../utils/api/Auth/authApi';
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
    isLogin: boolean; // 로그인 여부
    isRegistCompleted: boolean; // 회원가입 성공 여부
    address: {
        id: number;
        address1: string;
        address2: string;
        address3: string;
    } | null;
}

const initialState: userInfo = {
    id: 0,
    name: '',
    phoneNumber: '',
    role: '',
    address: null,
    isRegistCompleted: false,
    isLogin: false,
};

// createAsyncThunk는 비동기 작업을 처리하는 액션을 만들어준다.
export const asyncLoginFetch = createAsyncThunk(
    'auth/login',
    async (formData: { account: string | undefined; password: string | undefined }) => {
        const { accessToken, refreshToken, user } = await authApi.login(formData);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setUserInfo(user);
        return user;
    },
);

export const asyncSignUpFetch = createAsyncThunk(
    'auth/signup',
    async (formData: signupFormData) => {
        const response = await authApi.signupApi(formData);
        return response;
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
                state.address = userInfo.address;
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
        // 로그인 성공
        builder.addCase(asyncLoginFetch.fulfilled, (state, { payload }) => {
            state.isLogin = true;
            state.id = payload.id;
            state.name = payload.name;
            state.phoneNumber = payload.phoneNumber
                .replace(/-/g, '')
                .replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');
            state.role = payload.role;
            state.address = payload.address;
        });
        // 회원가입 성공
        builder.addCase(asyncSignUpFetch.fulfilled, (state) => {
            state.isRegistCompleted = true;
        });
    },
});

export const { loginCheck, logOut } = actions;

export default authReducer;
