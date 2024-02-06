import { RouteObject } from 'react-router-dom';
import HomeRoutes from '@/features/todo/home/routes';
import AddTodoRoutes from '@/features/todo/add/routes';

const AppRoutes: RouteObject[] = [
  ...(HomeRoutes as RouteObject[]),
  ...(AddTodoRoutes as RouteObject[]),
];

export default AppRoutes;
