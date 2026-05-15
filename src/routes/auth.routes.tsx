import { LoginPage, RegisterPage } from '../pages';
import PublicRoute from './PublicRoute';

export const authRoutes = {
  path: '/',
  element: <PublicRoute />,
  children: [
    { path: 'login', element: <LoginPage /> },
    { path: 'register', element: <RegisterPage /> },
  ],
};
