import { useState } from 'react';
import { useMutation } from 'react-query';
import TodoForm, { TodoFormProps } from '@/components/Todo/TodoForm/TodoForm';
import { addTodoEndpoint } from '@/utils/api';

const AddTodo = () => {
  const [clearTrigger, setClearTrigger] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const addTodoMutation = useMutation(addTodoEndpoint, {
    onSuccess: () => {
      setClearTrigger(true);
      setNotificationVisible(true);
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

  const todoFormProps: TodoFormProps = {
    title: 'Add to do',
    onAction: handleAddTodo,
    clearTrigger: clearTrigger,
    onClear: clearTextField,
    notificationVisible: notificationVisible,
    notificationMessage: 'To do saved',
    notificationDuration: 3000,
  };

  return <TodoForm {...todoFormProps} />;
};

export default AddTodo;
