import { instance } from '../index';

export interface OrderList {
    id: number;
    name: string;
    phoneNumber: string;
    deliveryRequest: string;
    address1: string;
    address2: string;
    address3: string;
    amount: string;
    price: string;
    product: {
        title: string;
    };
}

export const getOrderList = async (): Promise<OrderList[]> => {
    const { data } = await instance.get('orders');
    return data.data;
};
