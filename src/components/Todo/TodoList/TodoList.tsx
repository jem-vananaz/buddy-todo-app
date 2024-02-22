import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import AddButton from '@/components/Elements/Buttons/AddButton/AddButton';
import DeleteConfirmDialog from '@/components/Dialogs/DeleteConfirmDialog/DeleteConfirmDialog';
import TodoOptionsDialog from '@/components/Dialogs/TodoOptionsDialog/TodoOptionsDialog';
import Notification from '@/components/Notification/Notification';
import EmptyTodoList from '@/components/Todo/EmptyList/EmptyList';
import TodoItem from '@/components/Todo/TodoItem/TodoItem';
import {
  Todo,
  completeMultiTodosEndpoint,
  deleteMultiTodosEndpoint,
  deleteTodoEndpoint,
} from '@/utils/api';

interface TodoListProps {
  todos: Todo[] | undefined;
  searchKeyword: string;
  selectButtonClicked: boolean;
  handleTodosMutationSuccess: () => void;
}

const TodoList = ({
  todos,
  searchKeyword,
  selectButtonClicked,
  handleTodosMutationSuccess,
}: TodoListProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [visibleActionButtonsId, setVisibleActionButtonsId] = useState<
    string | undefined
  >(undefined);
  const [selectedForDeletionId, setSelectedForDeletionId] = useState<
    string | undefined
  >(undefined);
  const [selectedTodos, setSelectedTodos] = useState<string[]>([]);
  const [isTodoOptionsDialogVisible, setIsTodoOptionsDialogVisible] =
    useState(false);
  const [notificationMessage, setNotificationMessage] = useState<string>('');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!selectButtonClicked) {
      setIsTodoOptionsDialogVisible(false);
      // Clear selected todos when the select button is toggled off
      setSelectedTodos([]);
    }
  }, [selectButtonClicked]);

  const completeTodosMutation = useMutation(completeMultiTodosEndpoint, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      setIsTodoOptionsDialogVisible(false);
      setSelectedTodos([]);
      setNotificationMessage('To do completed');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      handleTodosMutationSuccess();
    },
    onError: (error) => {
      console.error('Error completing todos:', error);
    },
  });

  const deleteTodosMutation = useMutation(deleteMultiTodosEndpoint, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      setIsTodoOptionsDialogVisible(false);
      setSelectedTodos([]);
      setNotificationMessage('To do deleted');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      handleTodosMutationSuccess();
    },
    onError: (error) => {
      console.error('Error deleting todos:', error);
    },
  });

  const mutateDeleteTodo = useMutation(deleteTodoEndpoint, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      setNotificationMessage('To do deleted');
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      handleTodosMutationSuccess();
    },
  });

  const filteredTodos = todos?.filter(
    (todo) =>
      todo &&
      todo.text &&
      typeof todo.text === 'string' &&
      todo.text.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  const handleAddTodo = () => {
    navigate('/add-todo');
  };

  const handleSelectTodo = (id: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedTodos([...selectedTodos, id]);
      setIsTodoOptionsDialogVisible(true);
    } else {
      setSelectedTodos(selectedTodos.filter((todoId) => todoId !== id));
      if (selectedTodos.length === 1) {
        setIsTodoOptionsDialogVisible(false);
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
    deleteTodosMutation.mutateAsync(selectedTodos);
  };

  const handleTodoItemClick = useCallback((id: string) => {
    setSelectedTodos((prevSelected) => {
      if (prevSelected.includes(id)) {
        // If the todo item is already selected, remove it from the selectedTodos array
        return prevSelected.filter((todoId) => todoId !== id);
      } else {
        // If the todo item is not selected, add it to the selectedTodos array
        return [...prevSelected, id];
      }
    });
  }, []);

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

  return (
    <>
      <div className="todo-list">
        {/* Conditional rendering of EmptyTodoList */}
        {selectButtonClicked ? (
          !todos || todos.length === 0 ? (
            <EmptyTodoList forSelection={true} />
          ) : null
        ) : !todos || todos.length === 0 ? (
          <EmptyTodoList />
        ) : null}
        {filteredTodos &&
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo._id}
              id={todo._id}
              text={todo.text}
              status={todo.status}
              isSelectedForDeletion={todo._id === selectedForDeletionId}
              visibleActionButtonsId={visibleActionButtonsId}
              onClick={() => handleTodoItemClick(todo._id)}
              showCheckbox={selectButtonClicked || selectedTodos.length > 0}
              isSelected={selectedTodos.includes(todo._id)}
              handleSelectTodo={handleSelectTodo}
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
      {isTodoOptionsDialogVisible && (
        <TodoOptionsDialog
          onSelectAll={handleSelectAll}
          onCompleteSelected={handleCompleteSelected}
          onDeleteSelected={handleDeleteSelected}
        />
      )}
      {selectedForDeletionId !== undefined && (
        <DeleteConfirmDialog
          onCancel={cancelDeleteTodo}
          onConfirm={confirmDeleteTodo}
        />
      )}
      {showNotification && <Notification message={notificationMessage} />}
    </>
  );
};

export default TodoList;
