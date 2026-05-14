import UserLayout from '../layouts/UserLayout';
import { HomePage, PropertiesPage } from '../pages';

export const guestRoutes = {
  path: '/',
  element: <UserLayout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: 'properties', element: <PropertiesPage /> },
  ],
};
