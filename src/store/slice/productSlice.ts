import { postCreateCategory } from '../../utils/api/Category/postCreateCategory';
import { createSlice } from '@reduxjs/toolkit';
import { postCreateProduct } from '../../utils/api/Product/postCreateProduct';
import { deleteCategory } from '../../utils/api/Category/deleeteCategory';
import { getCategories } from '../../utils/api/Category/getCategories';

// 상품등록 관련 slice
interface postProduct {
    title: string; // 상품 이름
    description: string; // 상품 설명
    prevPrice: string; // 상품 가격
    sellPrice: string; // 판매 가격
    minAmount: string; // 최소 주문 수량
    status: string; // 판매여부 (ex: 판매중, 임시 판매 중단)
    categories: null | [{ id: string; name: string }];
    category_id: null | string; // 카테고리 항목 id (ex: 문그로우 카테고리의 id)
    isCompleted: null | boolean; // 게시물 생성 성공 여부
}

const initialState: postProduct = {
    title: '',
    description: '',
    prevPrice: '',
    sellPrice: '',
    minAmount: '1',
    status: '판매중',
    category_id: null,
    categories: null,
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
            state.category_id = `${payload}`;
        },
        setSeletedIsCompleted(state) {
            state.isCompleted = false;
        },
    },
    extraReducers: (builder) => {
        // 게시물 등록 성공
        builder.addCase(postCreateProduct.fulfilled, (state) => {
            state.isCompleted = true;
        });
        // 카테고리 목록 물러오기
        builder.addCase(getCategories.fulfilled, (state, { payload }) => {
            state.categories = payload;
        });
        // 카테고리 등록
        builder.addCase(postCreateCategory.fulfilled, (state, { payload }) => {
            if (state.categories) state.categories.push({ id: payload.id, name: payload.name });
        });
        // 카테고리 삭제
        builder.addCase(deleteCategory.fulfilled, (state, { payload }) => {
            if (state.categories) state.categories.splice(payload, 1);
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
    setSeletedIsCompleted,
} = actions;

export default productReducer;
