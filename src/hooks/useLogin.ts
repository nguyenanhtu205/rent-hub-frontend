import { useMutation } from '@tanstack/react-query';
import { useAuthStore } from '../stores/authStore';
import loginService from '../services/loginService';

type LoginPayload = {
  email: string;
  password: string;
};

const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  const { mutate: login, isPending } = useMutation({
    mutationFn: (payload: LoginPayload) => loginService(payload),
    onSuccess: (data) => {
      // Refresh token được backend set vào httpOnly cookie tự động
      setAuth(data.user, data.accessToken);
    },
  });

  return { login, isPending };
};

export default useLogin;
