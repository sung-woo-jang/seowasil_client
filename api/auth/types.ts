import { CommonResponse } from '../types';

interface IAddress {
  id: number;
  zoneCode: string;
  roadAddress: string;
  detailAddress: string;
}

export interface UserProfile extends CommonResponse {
  data: {
    id: number;
    username: string;
    phoneNumber: string;
    role: string;
    address: IAddress[];
  };
}
