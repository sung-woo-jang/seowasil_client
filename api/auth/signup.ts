import { API_URL } from '../../constants/API_URL';
import { useMutation } from '@tanstack/react-query';
import { UserProfile } from './types';
import { useLoginMutate } from './login';
import { axiosInstance } from '../axiosInstance';

interface ISignupBody {
  username: string;
  password: string;
  passwordConfirm: string;
  account: string;
  phoneNumber: string;
  zoneCode: string;
  roadAddress: string;
  detailAddress: string;
}

interface ISignupSuccessResponse extends UserProfile {}

const signup = async (body: ISignupBody): Promise<ISignupSuccessResponse> => {
  const { data } = await axiosInstance.post(API_URL.AUTH.SIGN_UP, body);
  return data;
};

export const useSignupMutate = () => {
  const { mutate: loginMutation } = useLoginMutate();

  const result = useMutation({
    mutationFn: signup,
    onSuccess(_, { account, password }) {
      loginMutation({ account, password });
    },
  });

  return result;
};
