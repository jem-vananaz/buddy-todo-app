import { RouteObject } from 'react-router-dom';
import Home from '../components/Home/Home';
import AddTodo from '../components/Add/AddTodo';

const HomeRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/add-todo',
    element: <AddTodo />,
  },
];

export default HomeRoutes;
