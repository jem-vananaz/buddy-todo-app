import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import TodoForm, { TodoFormProps } from '@/components/Forms/TodoForm/TodoForm';
import { Todo, fetchTodoById, updateTodoEndpoint } from '@/utils/api';
import styled from 'styled-components';

const Loader = styled.div`
  font-size: 1rem;
  font-weight: 800;
  color: #2f80ed;
`;

const UpdateTodo = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string | undefined }>();

  const [todoValue, setTodoValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const queryClient = useQueryClient();
  const { data: todo, isLoading } = useQuery<Todo, Error>(
    ['todo', id],
    () => fetchTodoById(id || ''),
    {
      enabled: !!id, // Fetch only when id is available
    },
  );

  const updateTodoMutation = useMutation<
    Todo,
    Error,
    { _id: string; text: string }
  >((data) => updateTodoEndpoint(data._id, data.text), {
    onSuccess: () => {
      queryClient.invalidateQueries('todo');
      setNotificationVisible(true);
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        navigate('/');
      }, 1500);
    },
  });

  useEffect(() => {
    if (!isLoading && todo) {
      setTodoValue(todo.text);
      setLoading(false);
    }
  }, [isLoading, todo]);

  const handleUpdateTodo = async (updatedTodoValue: string) => {
    try {
      if (id) {
        await updateTodoMutation.mutateAsync({
          _id: id,
          text: updatedTodoValue,
        });
      }
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  if (loading || isLoading) {
    return <Loader>Loading...</Loader>;
  }

  const todoFormProps: TodoFormProps = {
    title: 'Update to do',
    todoValue: todoValue,
    onTodoValueChange: setTodoValue,
    onAction: handleUpdateTodo,
    disabled: showLoader,
    notificationVisible: notificationVisible,
    notificationMessage: 'To do updated',
    notificationDuration: 1500,
  };

  return (
    <>
      <TodoForm {...todoFormProps} />
      {showLoader && <Loader>Updating to do...</Loader>}
    </>
  );
};

export default UpdateTodo;
