import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthenticatedOnly = () => {
  const { authUser } = useSelector((state) => state.authUser);
  return authUser ? <Outlet /> : <Navigate to={'/login'} />;
};

export default AuthenticatedOnly;
