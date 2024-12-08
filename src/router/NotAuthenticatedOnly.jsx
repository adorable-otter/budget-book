import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const NotAuthenticatedOnly = () => {
  const { authUser } = useSelector((state) => state.authUser);
  return authUser ? <Navigate to={'/'} /> : <Outlet />;
};

export default NotAuthenticatedOnly;
