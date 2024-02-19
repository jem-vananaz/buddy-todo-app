import { useState } from 'react';
import { useMutation } from 'react-query';
import TodoForm from '@/components/Todo/TodoForm/TodoForm';
import { addTodoEndpoint } from '@/utils/api';

const AddTodo = () => {
  const [clearTrigger, setClearTrigger] = useState(false);
  const addTodoMutation = useMutation(addTodoEndpoint, {
    onSuccess: () => {
      setClearTrigger(true);
    },
  });

  const handleAddTodo = async (todoValue: string) => {
    try {
      await addTodoMutation.mutateAsync(todoValue);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const clearTextField = () => {
    setClearTrigger(false); // Reset the clearTrigger state back to false
  };

  return (
    <TodoForm
      title="Add to do"
      onAction={handleAddTodo}
      actionNotificationMessage="To do saved"
      clearTrigger={clearTrigger}
      onClear={clearTextField}
    />
  );
};

export default AddTodo;
