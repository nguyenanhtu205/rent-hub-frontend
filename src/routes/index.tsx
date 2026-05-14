import { createBrowserRouter } from 'react-router-dom';
import { guestRoutes } from './guest.routes';
import { ForbiddenPage, NotFoundPage } from '../pages';
import { authRoutes } from './auth.routes';
import { memberRoutes } from './member.routes';
import { landlordRoutes } from './landlord.routes';
import { internalRoutes } from './internal.routes';

export const router = createBrowserRouter([
  guestRoutes,
  authRoutes,
  memberRoutes,
  landlordRoutes,
  internalRoutes,
  {
    path: 'forbidden',
    element: <ForbiddenPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
