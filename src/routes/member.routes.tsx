import ProtectedRoute from './ProtectedRoute';
import UserLayout from '../layouts/UserLayout.tsx';
import { PropertyDetailPage } from '../pages';

export const memberRoutes = {
  path: '/',
  element: <ProtectedRoute allowedRoles={['member']} allowGuest={false} />,
  children: [
    {
      element: <UserLayout />,
      children: [{ path: 'properties/:id', element: <PropertyDetailPage /> }],
    },
  ],
};
