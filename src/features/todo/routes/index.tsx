import { RouteObject } from 'react-router-dom';
import Home from '../components/Home/Home';
import AddTodo from '../components/Add/AddTodo';
import UpdateTodo from '../components/Update/UpdateTodo';

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
    path: '/update-todo/:id',
    element: <UpdateTodo />,
  },
];

export default TodoRoutes;
