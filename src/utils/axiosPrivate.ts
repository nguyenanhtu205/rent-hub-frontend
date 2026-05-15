import axios from 'axios';
import { useAuthStore } from '../stores/authStore';

const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers: (() => void)[] = [];

const subscribeTokenRefresh = (callback: () => void) => {
  refreshSubscribers.push(callback);
};

const onRefreshSuccess = () => {
  refreshSubscribers.forEach((cb) => cb());
  refreshSubscribers = [];
};

const handleLogout = () => {
  useAuthStore.getState().clearAuth();

  alert('Phiên đăng nhập đã hết. Vui lòng đăng nhập lại.');

  if (window.location.pathname !== '/login') {
    window.location.href = '/login';
  }
};

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh(() => resolve(axiosPrivate(originalRequest)));
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh-token`,
          {},
          { withCredentials: true },
        );

        const user = useAuthStore.getState().user;
        if (user) {
          useAuthStore.getState().setAuth(user, response.data.accessToken);
        }

        isRefreshing = false;
        onRefreshSuccess();

        return axiosPrivate(originalRequest);
      } catch (err) {
        isRefreshing = false;
        refreshSubscribers = [];
        handleLogout();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosPrivate;
