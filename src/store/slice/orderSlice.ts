import { createSlice } from '@reduxjs/toolkit';

interface OrderState {
    address1: string; //  우편번호
    address2: string; //  주소
    address3: string; //  상세주소
    delivery_request: string; //  배송 요청사항
    amount: number; // 주문 수량
    price: number; // 주문 가격
    user_id: number;
    product_id: number;
}

const initialState: OrderState = {
    address1: '',
    address2: '',
    address3: '',
    delivery_request: '',
    amount: 0,
    price: 0,
    user_id: 0,
    product_id: 0,
};

export const { reducer: orderReducer, actions } = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setSelectedOrder: (_, { payload }) => payload,
        setSelecteddeliveryRequest: (state, { payload }) => {
            state.delivery_request = payload;
        },
        setSelectedAmount: (state, { payload }) => {
            state.amount = payload;
        },
        setSelectedPrice: (state, { payload }) => {
            state.price = payload;
        },
    },
    extraReducers: (builder) => {},
});

export const { setSelectedOrder, setSelecteddeliveryRequest, setSelectedAmount, setSelectedPrice } =
    actions;

export default orderReducer;
