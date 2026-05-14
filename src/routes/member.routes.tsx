import GuestLayout from '../layouts/GuestLayout';
import { PropertyDetailPage } from '../pages';

export const memberRoutes = {
  path: '/',
  element: <GuestLayout />,
  children: [{ path: 'properties/:id', element: <PropertyDetailPage /> }],
};
