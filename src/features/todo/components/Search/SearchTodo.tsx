import EmptyTodoList from '@/components/EmptyTodo/EmptyTodoList';
import TodoComponent from '@/components/Todo/TodoComponent';

const SearchTodo = () => (
  <>
    <TodoComponent title="Search to do" showTextField={false} />
    <EmptyTodoList forSelection={true} />
  </>
);

export default SearchTodo;
