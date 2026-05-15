import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

const PublicRoute = () => {
  const user = useAuthStore((state) => state.user);

  if (user)
    return (
      <Navigate
        to={
          user.role === 'member'
            ? '/'
            : user.role === 'landlord'
              ? '/landlord/dashboard'
              : '/internal/dashboard'
        }
        replace
      />
    );

  return <Outlet />;
};

export default PublicRoute;
