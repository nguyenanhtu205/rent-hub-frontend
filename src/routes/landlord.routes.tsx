import { LandlordPortalPage } from '../pages';
import LandlordLayout from '../layouts/LandlordLayout.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';

export const landlordRoutes = {
  path: 'landlord',
  element: <ProtectedRoute allowedRoles={['landlord']} allowGuest={false} />,
  children: [
    {
      element: <LandlordLayout />,
      children: [{ path: 'dashboard', element: <LandlordPortalPage /> }],
    },
  ],
};
