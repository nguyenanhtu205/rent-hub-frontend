import { LandlordPortalPage } from '../pages';

export const landlordRoutes = {
  path: 'landlord',
  element: null,
  children: [{ path: 'portal', element: <LandlordPortalPage /> }],
};
