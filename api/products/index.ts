import axiosInstance from '../axiosInstance';
import { API_URL } from '../../constants/API_URL';

interface ICeateProductBody {
  title: string;
  description: string;
  prevPrice: number;
  sellPrice: number;
  minAmount: number;
  categoryId: number;
  file: FormData;
}

const createProduct = async (body: ICeateProductBody) => {
  const { data } = await axiosInstance.post(API_URL.PRODUCTS.CREATE, {
    data: body,
  });
  return data;
};

const updateProduct = async (id: string) => {
  const { data } = await axiosInstance.patch(API_URL.PRODUCTS.PATCH(id));
  return data;
};
const deleteProduct = async (id: string) => {
  const { data } = await axiosInstance.delete(API_URL.PRODUCTS.DELETE(id));
  return data;
};
