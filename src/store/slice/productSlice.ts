import { createSlice } from '@reduxjs/toolkit';
import * as productApi from '../../api/productApi';
// 상품등록 관련 slice
interface postProduct {
    title: string; // 상품 이름
    description: string; // 상품 설명
    prevPrice: string; // 상품 가격
    sellPrice: string; // 판매 가격
    minAmount: string; // 최소 주문 수량
    status: string; // 판매여부 (ex: 판매중, 임시 판매 중단)
    categories: [{ id: string; name: string }];
    category_id: string; // 카테고리 항목 id (ex: 문그로우 카테고리의 id)
    isCompleted: boolean; // 게시물 생성 성공 여부
}

const initialState: postProduct = {
    title: '',
    description: '',
    prevPrice: '0',
    sellPrice: '0',
    minAmount: '0',
    status: '판매중',
    category_id: '',
    categories: [{ id: '', name: '' }],
    isCompleted: false,
};

export const { reducer: productReducer, actions } = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSelectedTitle(state, { payload }) {
            state.title = payload;
        },
        setSelectedDescription(state, { payload }) {
            state.description = payload;
        },
        setSelectedPrevPrice(state, { payload }) {
            state.prevPrice = payload;
        },
        setSelectedSellPrice(state, { payload }) {
            state.sellPrice = payload;
        },
        setSelectedMinAmount(state, { payload }) {
            state.minAmount = payload;
        },
        setSelectedStatus(state, { payload }) {
            state.status = payload;
        },
        setSelectedCategoryId(state, { payload }) {
            state.category_id = payload;
        },
    },
    extraReducers: (builder) => {
        // 게시물 등록 성공
        builder.addCase(productApi.asyncPostProductFetch.fulfilled, (state) => {
            state.isCompleted = true;
        });
        // 카테고리 목록 물러오기
        builder.addCase(productApi.asyncGetCategoryFetch.fulfilled, (state, { payload }) => {
            state.categories = payload;
        });
        // 카테고리 등록
        builder.addCase(productApi.asyncPostCategoryFetch.fulfilled, (state, { payload }) => {
            state.categories.push({ id: payload.id, name: payload.name });
        });
    },
});

export const {
    setSelectedTitle,
    setSelectedDescription,
    setSelectedPrevPrice,
    setSelectedSellPrice,
    setSelectedMinAmount,
    setSelectedStatus,
    setSelectedCategoryId,
} = actions;

export default productReducer;
