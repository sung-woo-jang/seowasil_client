import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { API_URL } from '../../constants/API_URL';
import { useAppDispatch } from '../../hooks/redux-hooks';

import { CommonResponse } from '../types';
import { IsLoginEnum, setIsLogin } from '../../store/slice/authSlice';
import { LOCALSTORAGE_KEYS } from '../../constants/LOCALSTORAGE_KEYS';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';
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
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isLoginLocalStorage = useReadLocalStorage<IsLoginEnum>(
    LOCALSTORAGE_KEYS.IS_LOGIN,
  );

  const [_, setIsLoginLocalStorage] = useLocalStorage<IsLoginEnum>(
    LOCALSTORAGE_KEYS.IS_LOGIN,
    isLoginLocalStorage !== null ? isLoginLocalStorage : IsLoginEnum.FETCHING,
  );

  const result = useMutation({
    mutationFn: login,
    onSuccess({ success }) {
      if (success) {
        dispatch(setIsLogin(IsLoginEnum.LOGIN));
        setIsLoginLocalStorage(IsLoginEnum.LOGIN);
        router.push('/');
      }
    },
  });
  return result;
};
