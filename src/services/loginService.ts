import axiosPublic from '../utils/axiosPublic';
import type { User } from '../types/user';

type LoginPayload = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
  user: User;
};

const loginService = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axiosPublic.post<LoginResponse>('/auth/login', payload);
  return response.data;
};

export default loginService;
