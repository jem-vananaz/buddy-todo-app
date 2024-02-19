import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Notification from '@/components/Notification/Notification';
import TodoForm from '@/components/Todo/TodoForm/TodoForm';
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

  const [initialValue, setInitialValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [notificationMessage, setNotificationMessage] = useState<string>('');
  const [showNotification, setShowNotification] = useState(false);
  const [showLoader, setShowLoader] = useState<boolean>(false);

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
      setNotificationMessage('To do updated');
      setShowNotification(true);
      setShowLoader(true);
      setTimeout(() => {
        setShowNotification(false);
        setShowLoader(false);
        navigate('/');
      }, 1500);
    },
  });

  useEffect(() => {
    if (!isLoading && todo) {
      setInitialValue(todo.text);
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
    return <Loader>Loading...</Loader>; // Render the loader UI
  }

  return (
    <>
      <TodoForm
        title="Update to do"
        onAction={handleUpdateTodo}
        initialValue={initialValue || ''}
        disabled={showLoader}
      />
      {showLoader && <Loader>Updating to do...</Loader>}
      {showNotification && <Notification message={notificationMessage} />}
    </>
  );
};

export default UpdateTodo;
