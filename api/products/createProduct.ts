import { useMutation } from '@tanstack/react-query';
import { API_URL } from '../../constants/API_URL';
import { formInstance } from '../axiosInstance';
import { useRouter } from 'next/navigation';

interface ICreateProductBody {
  title: string;
  description: string;
  sellPrice: number;
  minAmount: number;
  categoryId: number;
  productImages: FileList | File[];
  detailImages: FileList | File[];
}

const createProduct = async (body: ICreateProductBody) => {
  const formData = new FormData();

  // 기존 body 데이터 추가
  Object.entries(body).forEach(([key, value]) => {
    if (key !== 'productImages' && key !== 'detailImages') {
      formData.append(key, value);
    }
  });

  // productImages 추가
  for (let i = 0; i < body.productImages.length; i++) {
    formData.append('productImages', body.productImages[i]);
  }

  // detailImages 추가
  for (let i = 0; i < body.detailImages.length; i++) {
    formData.append('detailImages', body.detailImages[i]);
  }

  const { data } = await formInstance.post(API_URL.PRODUCTS.CREATE, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};

export default function useCreateProductMutation() {
  const router = useRouter();
  const result = useMutation({
    mutationFn: createProduct,
    onSuccess() {
      router.push('/');
    },
  });
  return result;
}
