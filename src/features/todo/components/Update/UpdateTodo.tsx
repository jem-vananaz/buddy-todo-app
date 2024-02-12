import { useParams } from 'react-router-dom';
import TodoComponent from '@/components/Todo/TodoComponent';

const UpdateTodo = () => {
  const { id } = useParams<{ id: string }>();

  const handleUpdateTodo = (updatedTodoValue: string) => {
    console.log('Updating todo:', updatedTodoValue);
    // Add logic here to actually update the todo
  };

  return (
    <TodoComponent
      title="Update to do"
      onAction={handleUpdateTodo}
      actionNotificationMessage="To do updated"
      initialValue={id}
    />
  );
};

export default UpdateTodo;
