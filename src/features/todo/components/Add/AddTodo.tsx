import { useState } from 'react';
import { useMutation } from 'react-query';
import TodoForm, { TodoFormProps } from '@/components/Forms/TodoForm/TodoForm';
import { addTodoEndpoint } from '@/utils/api';

const AddTodo = () => {
  const [todoValue, setTodoValue] = useState('');
  const [notificationVisible, setNotificationVisible] = useState(false);

  const addTodoMutation = useMutation(addTodoEndpoint, {
    onSuccess: () => {
      setTodoValue('');
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

  const todoFormProps: TodoFormProps = {
    title: 'Add to do',
    todoValue: todoValue,
    onTodoValueChange: setTodoValue,
    onAction: handleAddTodo,
    notificationVisible: notificationVisible,
    notificationMessage: 'To do saved',
    notificationDuration: 3000,
  };

  return <TodoForm {...todoFormProps} />;
};

export default AddTodo;
