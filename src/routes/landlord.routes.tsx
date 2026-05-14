import { LandlordPortalPage } from '../pages';
import LandlordLayout from '../layouts/LandlordLayout.tsx';

export const landlordRoutes = {
  path: 'landlord',
  element: <LandlordLayout />,
  children: [{ path: 'dashboard', element: <LandlordPortalPage /> }],
};
