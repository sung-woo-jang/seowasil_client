import { configureStore } from '@reduxjs/toolkit';
import accessTokenReducer from './slice/authSlice';
import selectedUserReducer from './slice/userSlice';

const store = configureStore({
    reducer: {
        accessToken: accessTokenReducer,
        selectedUser: selectedUserReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
