import UserLayout from '../layouts/UserLayout';
import { HomePage, PropertiesPage } from '../pages';
import ProtectedRoute from './ProtectedRoute';

export const guestRoutes = {
  path: '/',
  element: <ProtectedRoute allowedRoles={['member']} allowGuest={true} />,
  children: [
    {
      element: <UserLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'properties', element: <PropertiesPage /> },
      ],
    },
  ],
};
