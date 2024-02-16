import { useState } from 'react';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import Notification from '@/components/Notification/Notification';
import EmptyTodoList from '@/components/Todo/EmptyList/EmptyList';
import TodoComponent from '@/components/Todo/TodoComponent/TodoComponent';
import TodoItem from '@/components/Todo/TodoItem/TodoItem';
import TodoOptionsDialog from '@/components/Dialogs/TodoOptionsDialog/TodoOptionsDialog';
import { fetchTodosEndpoint, completeTodosEndpoint } from '@/utils/api';

const SelectTodo = () => {
  const queryClient = useQueryClient();
  const { data: todos } = useQuery('todos', fetchTodosEndpoint);
  const [selectedTodos, setSelectedTodos] = useState<string[]>([]);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const completeTodosMutation = useMutation(completeTodosEndpoint, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      setIsDialogVisible(false);
      setSelectedTodos([]);
      setNotificationMessage('To do completed');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    },
    onError: (error) => {
      console.error('Error completing todos:', error);
    },
  });

  const handleSelectTodo = (id: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedTodos([...selectedTodos, id]);
      setIsDialogVisible(true);
    } else {
      setSelectedTodos(selectedTodos.filter((todoId) => todoId !== id));
      if (selectedTodos.length === 1) {
        setIsDialogVisible(false);
      }
    }
  };

  const handleSelectAll = () => {
    if (todos) {
      const allIds = todos.map((todo) => todo._id);
      setSelectedTodos(allIds);
    }
  };

  const handleCompleteSelected = () => {
    completeTodosMutation.mutateAsync(selectedTodos);
  };

  const handleDeleteSelected = () => {
    // Logic to handle deleting selected todo items
  };

  return (
    <>
      <TodoComponent title="Select to do" showTextField={false} />
      <div className="todo-list">
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo._id}
              id={todo._id}
              text={todo.text}
              status={todo.status}
              isSelectedForDeletion={false}
              visibleActionButtonsId={undefined}
              onClick={() => {}}
              showCheckbox={true}
              isSelected={selectedTodos.includes(todo._id)}
              handleSelectTodo={handleSelectTodo}
              handleKebabIconClick={() => {}}
              handleUpdateTodo={() => {}}
              handleDeleteTodo={() => {}}
            />
          ))}
      </div>
      {(!todos || todos.length === 0) && <EmptyTodoList forSelection={true} />}
      {/* Render the dialog if at least one todo item is selected */}
      {isDialogVisible && (
        <TodoOptionsDialog
          onSelectAll={handleSelectAll}
          onCompleteSelected={handleCompleteSelected}
          onDeleteSelected={handleDeleteSelected}
        />
      )}
      {showNotification && <Notification message={notificationMessage} />}
    </>
  );
};

export default SelectTodo;
