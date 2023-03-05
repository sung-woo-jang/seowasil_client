import { createAsyncThunk } from '@reduxjs/toolkit';
import { formInstance, instance } from '../index';

interface postCreateProductData {
    files: File[];
    category_id: string;
    description: string;
    minAmount: string;
    prevPrice: string;
    sellPrice: string;
    status: string;
    title: string;
}

export const postCreateProduct = createAsyncThunk(
    'product/images',
    async ({
        files,
        category_id,
        description,
        minAmount,
        prevPrice,
        sellPrice,
        status,
        title,
    }: postCreateProductData) => {
        const filesResponseData = await uploadProductImage(files);
        const response = await createProduct({
            productImage_id: `${filesResponseData.id}`,
            category_id,
            description,
            minAmount,
            prevPrice,
            sellPrice,
            status,
            title,
        });

        return response;
    },
);

/* ********************************** */

export const createProduct = async (formData: {
    title: string; // 상품 이름
    description: string; // 상품 설명
    prevPrice: string; // 상품 가격
    sellPrice: string; // 판매 가격
    minAmount: string; // 최소 주문 수량
    status: string; // 판매여부 (ex: 판매중, 임시 판매 중단)
    category_id: string; // 카테고리 항목 id (ex: 문그로우 카테고리의 id)
    productImage_id: string;
}) => {
    const { data } = await instance.post('products', {
        ...formData,
    });
    return data;
};

export const uploadProductImage = async (formData: File[]) => {
    const files = new FormData();
    formData.forEach((file: File) => files.append('files', file));

    const { data } = await formInstance.post('product-images', files);

    return data.data;
};
