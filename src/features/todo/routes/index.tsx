import { RouteObject } from 'react-router-dom';
import Home from '../components/Home/Home';
import AddTodo from '../components/Add/AddTodo';
import SelectTodo from '../components/Select/SelectTodo';

const TodoRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/add-todo',
    element: <AddTodo />,
  },
  {
    path: '/select-todo',
    element: <SelectTodo />,
  },
];

export default TodoRoutes;
