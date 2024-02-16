import EmptyTodoList from '@/components/Todo/EmptyList/EmptyList';
import TodoComponent from '@/components/Todo/TodoComponent/TodoComponent';

const SearchTodo = () => (
  <>
    <TodoComponent title="Search to do" showTextField={false} />
    <EmptyTodoList forSelection={true} />
  </>
);

export default SearchTodo;
