import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AppContainer } from './elements';
import AddButton from '@/components/Buttons/AddButton';
import DeleteConfirmDialog from '@/components/Dialogs/DeleteConfirmDialog';
import EmptyTodoList from '@/components/EmptyTodo/EmptyTodoList';
import HeaderComponent from '@/components/Header/Header';
import Notification from '@/components/Notification/Notification';
import TodoItem from '@/components/Todo/TodoItem/TodoItem';
import { Todo, fetchTodosEndpoint, deleteTodoEndpoint } from '@/utils/api';

const Home = () => {
  const queryClient = useQueryClient();
  const { data: todos } = useQuery<Todo[], Error>('todos', fetchTodosEndpoint);
  const mutateDeleteTodo = useMutation(deleteTodoEndpoint, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      setNotificationMessage('To do deleted');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    },
  });

  const [searchKeyword, setSearchKeyword] = useState('');
  const [visibleActionButtonsId, setVisibleActionButtonsId] = useState<
    string | undefined
  >(undefined);
  const [selectedForDeletionId, setSelectedForDeletionId] = useState<
    string | undefined
  >(undefined);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const filteredTodos = todos?.filter(
    (todo) =>
      todo &&
      todo.text &&
      typeof todo.text === 'string' &&
      todo.text.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  const navigate = useNavigate();

  const handleSelectButton = () => {
    console.log('select button clicked');
  };

  const handleKebabIconClick = (id: string) => {
    setVisibleActionButtonsId(id === visibleActionButtonsId ? undefined : id);
  };

  const handleUpdateTodo = (id: string) => {
    const todoToUpdate = (todos ?? []).find((todo) => todo._id === id);
    if (todoToUpdate) {
      navigate(`/update-todo/${id}`);
    }
  };

  const handleDeleteTodo = (id: string) => {
    setSelectedForDeletionId(id);
  };

  const confirmDeleteTodo = () => {
    if (selectedForDeletionId !== undefined) {
      mutateDeleteTodo.mutateAsync(selectedForDeletionId);
      setSelectedForDeletionId(undefined);
    }
  };

  const cancelDeleteTodo = () => {
    setSelectedForDeletionId(undefined);
  };

  const handleAddTodo = () => {
    navigate('/add-todo');
  };

  const handleLogout = () => {
    // Add your logout logic here
  };

  return (
    <AppContainer>
      <HeaderComponent
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        handleSelectButton={handleSelectButton}
        handleLogout={handleLogout}
      />
      <div className="todo-list">
        {(!todos || todos.length === 0) && !searchKeyword && <EmptyTodoList />}
        {filteredTodos &&
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo._id}
              id={todo._id}
              text={todo.text}
              isSelectedForDeletion={todo._id === selectedForDeletionId}
              visibleActionButtonsId={visibleActionButtonsId}
              onClick={() => setVisibleActionButtonsId(undefined)}
              handleKebabIconClick={handleKebabIconClick}
              handleUpdateTodo={handleUpdateTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        {searchKeyword && (!filteredTodos || filteredTodos.length === 0) && (
          <EmptyTodoList forSearchResult={true} />
        )}
      </div>
      {!searchKeyword && todos && todos.length > 0 && (
        <AddButton onClick={handleAddTodo} />
      )}
      {selectedForDeletionId !== undefined && (
        <DeleteConfirmDialog
          onCancel={cancelDeleteTodo}
          onConfirm={confirmDeleteTodo}
        />
      )}
      {showNotification && <Notification message={notificationMessage} />}
    </AppContainer>
  );
};

export default Home;
