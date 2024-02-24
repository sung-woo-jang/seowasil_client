'use server';
import { useMutation } from '@tanstack/react-query';
import { API_URL } from '../../constants/API_URL';
import axiosInstance from '../axiosInstance';
import { redirect, useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';

interface ICreateProductBody {
  title: string;
  description: string;
  sellPrice: number;
  minAmount: number;
  categoryId: number;
  productImages: FileList | File[];
  detailImages: FileList | File[];
}

export async function createProduct(formData: FormData) {
  const formValues = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    sellPrice: formData.get('sellPrice') as string,
    minAmount: formData.get('minAmount') as string,
    productImages: formData.getAll('productImages') as File[],
    detailImages: formData.getAll('detailImages') as File[],
    categoryId: formData.get('categoryId') as string,
  };
  console.log(formValues);
  const { data, status } = await axiosInstance.post(API_URL.PRODUCTS.CREATE, formValues, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  if (status !== 201) return { message: 'fail' };
  revalidatePath('/');
  redirect('/');
  console.log(status);
}
// const createProduct = async (body: ICreateProductBody) => {
//   const formData = new FormData();

//   // 기존 body 데이터 추가
//   Object.entries(body).forEach(([key, value]) => {
//     if (key !== 'productImages' && key !== 'detailImages') {
//       formData.append(key, value);
//     }
//   });

//   // productImages 추가
//   for (let i = 0; i < body.productImages.length; i++) {
//     formData.append('productImages', body.productImages[i]);
//   }

//   // detailImages 추가
//   for (let i = 0; i < body.detailImages.length; i++) {
//     formData.append('detailImages', body.detailImages[i]);
//   }

//   const { data } = await axiosInstance.post(API_URL.PRODUCTS.CREATE, formData, {
//     headers: { 'Content-Type': 'multipart/form-data' },
//   });

//   return data;
// };

// export default function useCreateProductMutation() {
//   const router = useRouter();
//   const result = useMutation({
//     mutationFn: createProduct,
//     onSuccess() {
//       router.push('/');
//     },
//   });
//   return result;
// }
