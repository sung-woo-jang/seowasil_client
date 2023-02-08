import { configureStore } from '@reduxjs/toolkit';
import accessTokenSliceReducer from './slice/authSlice';
import selectedUserReducer from './slice/userSlice';

export const store = configureStore({
    reducer: {
        accessToken: accessTokenSliceReducer,
        selectedUser: selectedUserReducer,
    },
});
