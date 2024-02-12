import TodoComponent from '@/components/Todo/TodoComponent';
import { addTodoEndpoint } from '../../../../api';

const AddTodo = () => {
  const handleAddTodo = async (todoValue: string) => {
    console.log('Adding todo:', todoValue);
    try {
      // Call the addTodoEndpoint function to add todo
      const result = await addTodoEndpoint(todoValue);
      console.log('Adding todo:', result);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <TodoComponent
      title="Add to do"
      onAction={handleAddTodo}
      actionNotificationMessage="To do saved"
    />
  );
};

export default AddTodo;
