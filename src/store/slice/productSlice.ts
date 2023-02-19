import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as productApi from '../../api/productApi';
// 상품등록 관련 slice
interface postProduct {
    title: string; // 상품 이름
    description: string; // 상품 설명
    prevPrice: string; // 상품 가격
    sellPrice: string; // 판매 가격
    minAmount: string; // 최소 주문 수량
    status: string; // 판매여부 (ex: 판매중, 임시 판매 중단)
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
    category_id: '5',
    isCompleted: false,
};

export const asyncPostProductFetch = createAsyncThunk(
    'product/images',
    async (formData: {
        files: File[];
        category_id: string;
        description: string;
        minAmount: string;
        prevPrice: string;
        sellPrice: string;
        status: string;
        title: string;
    }) => {
        const filesResponseData = await productApi.uploadProductImage(formData.files);
        const response = await productApi.createProduct({
            productImage_id: `${filesResponseData.id}`,
            category_id: formData.category_id,
            description: formData.description,
            minAmount: formData.minAmount,
            prevPrice: formData.prevPrice,
            sellPrice: formData.sellPrice,
            status: formData.status,
            title: formData.title,
        });

        return response;
    },
);

export const { reducer: productReducer, actions } = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addTitle(state, { payload }) {
            state.title = payload;
        },
        addDescription(state, { payload }) {
            state.description = payload;
        },
        addPrevPrice(state, { payload }) {
            state.prevPrice = payload;
        },
        addSellPrice(state, { payload }) {
            state.sellPrice = payload;
        },
        addMinAmount(state, { payload }) {
            state.minAmount = payload;
        },
        addStatus(state, { payload }) {
            state.status = payload;
        },
    },
    extraReducers: (builder) => {
        // 게시물 등록 성공
        builder.addCase(asyncPostProductFetch.fulfilled, (state) => {
            state.isCompleted = true;
        });
    },
});

export const { addTitle, addDescription, addPrevPrice, addSellPrice, addMinAmount, addStatus } =
    actions;

export default productReducer;
