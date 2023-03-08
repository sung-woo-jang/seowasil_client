import { getCartByUserAsyncThunk } from './../../utils/api/Cart/getCartByUser';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCreateCartThunk } from '../../utils/api/Cart/postCreateCart';
import { fetchDeleteCartThunk } from '../../utils/api/Cart/deleteCart';

// 상품등록 관련 slice
export interface CartsState {
    id: number; // cart Id
    product_id: number; // 상품 id
    amount: number; // 구매수량
    title: string; // 상품명
    prev_price: number; // 상품 가격
    sell_price: number; // 판매 가격
    category: string; // 카테고리명
    stored_file_name: string[];
    is_selected: boolean; // 구매 선택 여부
}

const initialState: CartsState[] = [
    {
        id: 0,
        product_id: 0,
        amount: 0,
        title: '',
        prev_price: 0,
        sell_price: 0,
        category: '',
        stored_file_name: [''],
        is_selected: true,
    },
];

export const { reducer: cartReducer, actions } = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setSelectedAmount: (state, { payload }) => {
            const { value, index } = payload;
            state[index].amount = +value;
        },
        setIsSelected: (state, { payload }) => {
            state[payload].is_selected = !state[payload].is_selected;
        },
    },
    extraReducers: (builder) => {
        // 사용자별 장바구니 목록 가져오기
        builder.addCase(getCartByUserAsyncThunk.fulfilled, (_, { payload }) => payload);
        // 사용자별 장바구니 등록 완료
        builder.addCase(fetchCreateCartThunk.fulfilled, (state, { payload }) => {
            alert('장바구니에 상품 추가가 완료되었습니다.');
        });
        // 장바구니 목록 삭제
        builder.addCase(fetchDeleteCartThunk.fulfilled, (state, { payload }) => {
            if (payload.affected === 1) {
                console.log('장바구니에 상품 삭제가 완료되었습니다.');
            }
        });
    },
});

export const { setSelectedAmount, setIsSelected } = actions;

export default cartReducer;
