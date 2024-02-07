import { RouteObject } from 'react-router-dom';
import HomeRoutes from '@/features/todo/routes';
import AddTodoRoutes from '@/features/todo/routes';

const AppRoutes: RouteObject[] = [
  ...(HomeRoutes as RouteObject[]),
  ...(AddTodoRoutes as RouteObject[]),
];

export default AppRoutes;
