import { RouteObject } from 'react-router-dom';
import AddTodo from '../components/AddTodo';

const AddTodoRoutes: RouteObject[] = [
  {
    path: '/add-todo',
    element: <AddTodo />,
  },
];

export default AddTodoRoutes;
