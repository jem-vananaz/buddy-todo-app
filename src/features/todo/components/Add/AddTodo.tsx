import { useState } from 'react';
import { useMutation } from 'react-query';
import TodoComponent from '@/components/Todo/TodoComponent';
import { addTodoEndpoint } from '../../../../api';

const AddTodo = () => {
  const [clearTrigger, setClearTrigger] = useState(false);
  const addTodoMutation = useMutation(addTodoEndpoint);

  const handleAddTodo = async (todoValue: string) => {
    console.log('Adding todo:', todoValue);
    try {
      await addTodoMutation.mutateAsync(todoValue);
      setClearTrigger(true);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <TodoComponent
      title="Add to do"
      onAction={handleAddTodo}
      actionNotificationMessage="To do saved"
      clearTrigger={clearTrigger}
    />
  );
};

export default AddTodo;
