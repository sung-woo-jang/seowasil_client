import { API_URL } from '../../constants/API_URL';

import { CommonResponse } from '../types';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../axiosInstance';
import { useRouter } from 'next/navigation';

/* Todo 
1. 로그인 성공 후 라우딩
*/

const login = async ({
  account,
  password,
}: {
  account: string;
  password: string;
}): Promise<CommonResponse> => {
  const { data } = await axiosInstance.post(API_URL.AUTH.LOG_IN, {
    account,
    password,
  });
  return data;
};

export const useLoginMutate = () => {
  const router = useRouter();

  const result = useMutation({
    mutationFn: login,
    onSuccess({ success }) {
      if (success) router.push('/');
    },
  });
  return result;
};
