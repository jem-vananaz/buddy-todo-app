import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import TodoComponent from '@/components/Todo/TodoComponent';
import { Todo, fetchTodoById, updateTodoEndpoint } from '@/utils/api';

const UpdateTodo = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [initialValue, setInitialValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

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
    return <div>Loading...</div>;
  }

  return (
    <TodoComponent
      title="Update to do"
      onAction={handleUpdateTodo}
      actionNotificationMessage="To do updated"
      initialValue={initialValue || ''}
    />
  );
};

export default UpdateTodo;
