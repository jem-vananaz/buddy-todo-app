import { RouteObject } from 'react-router-dom';
import TodoRoutes from '@/features/todo/routes';

const AppRoutes: RouteObject[] = [...(TodoRoutes as RouteObject[])];

export default AppRoutes;
