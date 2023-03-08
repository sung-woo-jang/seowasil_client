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
    user_id: number;
    product_id: number;
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
    user_id: 0,
    product_id: 0,
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
        setSelectedOrderUser: (state, { payload }) => {
            state.user_id = payload;
        },
        setSelectedOrderProduct: (state, { payload }) => {
            state.product_id = payload;
        },
    },
    extraReducers: (builder) => {},
});

export const {
    setSelectedOrder,
    setSelecteddeliveryRequest,
    setSelectedAmount,
    setSelectedPrice,
    setSelectedAddress,
    setSelectedOrderProduct,
    setSelectedOrderUser,
    setSelectedPhoneNumber,
    setSelectedOrderName,
} = actions;

export default orderReducer;
