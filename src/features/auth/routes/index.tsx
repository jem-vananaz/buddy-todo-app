import { RouteObject } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

const AuthRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
];

export default AuthRoutes;
