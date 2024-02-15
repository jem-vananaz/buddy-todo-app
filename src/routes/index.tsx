import { RouteObject } from 'react-router-dom';
import AuthRoutes from '@/features/auth/routes';
import TodoRoutes from '@/features/todo/routes';

const AppRoutes: RouteObject[] = [...AuthRoutes, ...TodoRoutes];

export default AppRoutes;
