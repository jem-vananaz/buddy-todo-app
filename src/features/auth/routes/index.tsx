import { RouteObject } from 'react-router-dom';
import Login from '../components/Login/Login';

const AuthRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
];

export default AuthRoutes;
