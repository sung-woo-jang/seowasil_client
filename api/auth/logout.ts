import { API_URL } from '../../constants/API_URL';
import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../axiosInstance';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { setIsLogin } from '@/store/slice/authSlice';

const logout = async () => {
  const { data } = await axiosInstance.post(API_URL.AUTH.LOGOUT);
  return data;
};

export const useLogoutMutate = () => {
  const dispatch = useAppDispatch();
  return useMutation({
    mutationFn: logout,
    onSuccess() {
      dispatch(setIsLogin(false));
    },
  });
};
