import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Role = 'ADMIN' | 'CUSTOMER';

interface userInfo {
  isLogin: boolean; // 로그인 여부
  username: string;
  phoneNumber: string;
  role: Role;
  address: [];
}

const initialState: userInfo = {
  isLogin: false,
  username: '',
  phoneNumber: '',
  role: 'CUSTOMER',
  address: [],
};

export const { reducer: authReducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin(state, { payload }: PayloadAction<boolean>) {
      state.isLogin = payload;
    },
  },
});

export const { setIsLogin } = actions;

export default authReducer;
