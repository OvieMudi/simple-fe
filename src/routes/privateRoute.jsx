import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LOGIN_URL } from './routes';

const PrivateRoute = () => {
  const { user } = useSelector((state) => state.auth);
  return user ? <Outlet /> : <Navigate to={LOGIN_URL} />;
};

export default PrivateRoute;
