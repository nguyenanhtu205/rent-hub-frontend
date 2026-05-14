import UserLayout from '../layouts/UserLayout';
import { PropertyDetailPage } from '../pages';

export const memberRoutes = {
  path: '/',
  element: <UserLayout />,
  children: [{ path: 'properties/:id', element: <PropertyDetailPage /> }],
};
