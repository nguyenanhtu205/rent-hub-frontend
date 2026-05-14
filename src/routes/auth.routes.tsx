import { LoginPage, RegisterPage } from '../pages';

export const authRoutes = {
  path: '/',
  element: null,
  children: [
    { path: 'login', element: <LoginPage /> },
    { path: 'register', element: <RegisterPage /> },
  ],
};
