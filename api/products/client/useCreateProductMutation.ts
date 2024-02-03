'use client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import createProduct from '../server/createProduct';

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
