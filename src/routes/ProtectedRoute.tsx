import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import type { Role } from '../types/user';

type Props = {
  allowedRoles?: Role[];
  allowGuest?: boolean;
};

const ProtectedRoute = ({ allowedRoles = [], allowGuest = false }: Props) => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return allowGuest ? <Outlet /> : <Navigate to='/login' replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to='/forbidden' replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
