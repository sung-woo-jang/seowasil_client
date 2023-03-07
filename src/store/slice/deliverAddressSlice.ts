import { postCreateAddressByUser } from './../../utils/api/DeliverAddress/postCreateAddressByUser';
import { createSlice } from '@reduxjs/toolkit';

const initialState: deliverAddressInfo = {
    address1: '',
    address2: '',
    address3: '',
};

export const { reducer: deliverAddressReducer, actions } = createSlice({
    name: 'deliverAddress',
    initialState,
    reducers: {
        setSelectedAddress: (_, { payload }) => payload,
    },
    extraReducers: (builder) => {
        // 주소등록 성공
        builder.addCase(postCreateAddressByUser.fulfilled, (state, { payload }) => {
            state.address1 = payload.address1;
            state.address2 = payload.address2;
            state.address3 = payload.address3;
        });
    },
});

export const { setSelectedAddress } = actions;

export default deliverAddressReducer;
