import { instance } from '../index';

export interface getCartByUserRespnseData {
    id: number; // cart Id
    product_id: number; // 상품 id
    amount: number; // 구매수량
    title: string; // 상품명
    prev_price: number; // 상품 가격
    sell_price: number; // 판매 가격
    category: string; // 카테고리명
    stored_file_name: string[];
    total_price: number;
}

export const getCartByUser = async (user_id: number): Promise<getCartByUserRespnseData[]> => {
    const { data } = await instance.get(`carts/${user_id}`);
    return data.data;
};
