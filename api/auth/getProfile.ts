import { API_URL } from '../../constants/API_URL';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { IsLoginEnum, Role, setIsLogin, setRole } from '../../store/slice/authSlice';
import axiosInstance from '../axiosInstance';

interface GetProfile {
  id: number;
  username: string;
  phoneNumber: string;
  role: Role;
  address: [
    {
      id: number;
      zoneCode: string;
      roadAddress: string;
      detailAddress: string;
    }
  ];
}

const getProfile = async (dispatch: ReturnType<typeof useAppDispatch>) => {
  try {
    const response = await axiosInstance.get<GetProfile>(API_URL.AUTH.GET_PROFILE);
    dispatch(setRole(response.data.role));
    response.data.role;
  } catch (error) {
    dispatch(setIsLogin(IsLoginEnum.LOGOUT));
  }
};

export default getProfile;
