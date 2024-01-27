import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { API_URL } from '../../constants/API_URL';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { IsLoginEnum, setIsLogin } from '../../store/slice/authSlice';
import { LOCALSTORAGE_KEYS } from '../../constants/LOCALSTORAGE_KEYS';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../axiosInstance';

const logout = async () => {
  const { data } = await axiosInstance.post(API_URL.AUTH.LOGOUT);
  return data;
};

export const useLogoutMutate = () => {
  const dispatch = useAppDispatch();

  const isLoginLocalStorage = useReadLocalStorage<IsLoginEnum>(
    LOCALSTORAGE_KEYS.IS_LOGIN,
  );

  const [_, setIsLoginLocalStorage] = useLocalStorage<IsLoginEnum>(
    LOCALSTORAGE_KEYS.IS_LOGIN,
    isLoginLocalStorage !== null ? isLoginLocalStorage : IsLoginEnum.FETCHING,
  );

  return useMutation({
    mutationFn: logout,
    onSuccess() {
      dispatch(setIsLogin(IsLoginEnum.LOGOUT));
      setIsLoginLocalStorage(IsLoginEnum.LOGOUT);
    },
  });
};
