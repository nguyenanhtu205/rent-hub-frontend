import GuestLayout from '../layouts/GuestLayout';
import { HomePage, PropertiesPage } from '../pages';

export const guestRoutes = {
  path: '/',
  element: <GuestLayout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: 'properties', element: <PropertiesPage /> },
  ],
};
