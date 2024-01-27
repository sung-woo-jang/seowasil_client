import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Role = 'ADMIN' | 'CUSTOMER';
export enum IsLoginEnum {
  FETCHING = 'FETCHING',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
}
interface userInfo {
  isLogin: IsLoginEnum; // 로그인 여부
  username: string;
  phoneNumber: string;
  role: Role;
  address: [];
}

const initialState: userInfo = {
  isLogin: IsLoginEnum.FETCHING,
  username: '',
  phoneNumber: '',
  role: 'CUSTOMER',
  address: [],
};

export const { reducer: authReducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin(state, { payload }: PayloadAction<IsLoginEnum>) {
      state.isLogin = payload;
    },
    setRole(state, { payload }: PayloadAction<Role>) {
      state.role = payload;
      state.isLogin = IsLoginEnum.LOGIN;
    },
  },
});

export const { setIsLogin, setRole } = actions;

export default authReducer;
