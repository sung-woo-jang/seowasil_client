import { removeserInfoToLocalStorage } from './../../utils/auth/useInfo';
import { formatPhoneNumber } from './../../utils/fomatter/formatPhoneNumber';
import { asyncSignupFetch, asyncLogOutFetch } from './../../utils/api/Auth/authApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { asyncLoginFetch } from '../../utils/api/Auth/authApi';
import { getUserInfoToLocalStorage } from '../../utils/auth/useInfo';

interface userInfo {
    id: number;
    name: string;
    phoneNumber: string;
    role: string;
    isLogin: boolean; // 로그인 여부
    isRegistCompleted: boolean; // 회원가입 성공 여부
}

const initialState: userInfo = {
    id: 0,
    name: '',
    phoneNumber: '',
    role: '',
    isRegistCompleted: false,
    isLogin: false,
};

export const asyncSignUpFetch = createAsyncThunk(
    'auth/signup',
    async (formData: signupFormData) => {
        const response = await asyncSignupFetch(formData);
        return response;
    },
);

export const { reducer: authReducer, actions } = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginCheck(state) {
            const userInfo = getUserInfoToLocalStorage();
            if (userInfo) {
                state.isLogin = true;
                state.isRegistCompleted = false;
                state.id = userInfo.id;
                state.name = userInfo.name;
                state.phoneNumber = userInfo.phoneNumber;
                state.role = userInfo.role;
            }
        },

        setSelectedIsRegistCompleted(state) {
            state.isRegistCompleted = false;
        },
    },
    extraReducers: (builder) => {
        // 로그인 성공
        builder.addCase(asyncLoginFetch.fulfilled, (state, { payload }) => {
            state.isLogin = true;
            state.id = payload.id;
            state.name = payload.name;
            state.phoneNumber = formatPhoneNumber(payload.phoneNumber);
            state.role = payload.role;
        });
        // 회원가입 성공
        builder.addCase(asyncSignUpFetch.fulfilled, (state, { payload }) => {
            state.id = payload.id;
            state.isRegistCompleted = true;
        });
        // 로그아웃
        builder.addCase(asyncLogOutFetch.fulfilled, (state) => {
            removeserInfoToLocalStorage();
            state.isLogin = false;
            state.isRegistCompleted = false;
            state.id = 0;
            state.name = '';
            state.phoneNumber = '';
            state.role = '';
        });
    },
});

export const { loginCheck, setSelectedIsRegistCompleted } = actions;

export default authReducer;
