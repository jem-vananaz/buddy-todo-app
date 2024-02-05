import { RouteObject } from 'react-router-dom';
import HomeRoutes from '@/features/home/routes';

const AppRoutes: RouteObject[] = [
  ...(HomeRoutes as RouteObject[]),
];

export default AppRoutes;
