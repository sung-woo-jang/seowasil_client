import { postCreateOrder } from './../../utils/api/Order/postCreateOrder';
import { createSlice } from '@reduxjs/toolkit';

interface OrderState {
    name: string;
    phoneNumber: string;
    delivery_request: string; //  배송 요청사항
    address1: string; //  우편번호
    address2: string; //  주소
    address3: string; //  상세주소
    amount: number; // 주문 수량
    price: number; // 주문 가격
    orderSuccess: boolean;
}

const initialState: OrderState = {
    name: '',
    phoneNumber: '',
    delivery_request: '', // 배송 요청사항
    address1: '', // 우편번호
    address2: '', // 주소
    address3: '', // 상세 주소
    amount: 0, // 주문 수량
    price: 0, // 최종 결제액
    orderSuccess: false,
};

export const { reducer: orderReducer, actions } = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setSelectedOrder: (state: any, { payload }) => {
            for (const key in state) {
                if (payload.hasOwnProperty(key)) {
                    state[key] = payload[key];
                }
            }
        },
        setSelectedAddress: (state, { payload }) => {
            state.address1 = payload.address1;
            state.address2 = payload.address2;
            state.address3 = payload.address3;
        },
        setSelectedOrderName: (state, { payload }) => {
            state.name = payload;
        },
        setSelectedPhoneNumber: (state, { payload }) => {
            state.phoneNumber = payload;
        },
        setSelecteddeliveryRequest: (state, { payload }) => {
            state.delivery_request = payload;
        },
        setSelectedAmount: (state, { payload }) => {
            state.amount = payload;
        },
        setSelectedPrice: (state, { payload }) => {
            state.price = payload;
        },

        setSelectedOrderSuccess: (state, { payload }) => {
            state.orderSuccess = payload;
        },
    },
    extraReducers: (builder) => {
        // 주문 성공
        builder.addCase(postCreateOrder.fulfilled, (state, { payload }) => {
            state.orderSuccess = true;
        });
    },
});

export const {
    setSelectedOrder,
    setSelecteddeliveryRequest,
    setSelectedAmount,
    setSelectedPrice,
    setSelectedAddress,
    setSelectedPhoneNumber,
    setSelectedOrderName,
    setSelectedOrderSuccess,
} = actions;

export default orderReducer;
