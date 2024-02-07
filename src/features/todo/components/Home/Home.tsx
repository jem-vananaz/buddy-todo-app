import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContainer } from './elements';
import AddButton from '@/components/Buttons/AddButton';
import DeleteConfirmDialog from '@/components/Dialogs/DeleteConfirmDialog';
import EmptyTodoList from '@/components/EmptyTodo/EmptyTodoList';
import HeaderComponent from '@/components/Header/Header';
import TodoItem from '@/components/TodoItem/TodoItem';

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Get my mac fixed' },
    { id: 2, text: 'Book ticket to Palawan' },
    { id: 3, text: 'Find hotel recommendation in Palawan' },
    { id: 4, text: 'Buy a graduation gift for Sarah' },
    { id: 5, text: 'Make a dentist appointment' },
    { id: 6, text: 'Water the plants' },
    { id: 7, text: 'Buy feeds for fish and dog' },
    { id: 8, text: 'Call mother' },
    { id: 9, text: 'Cut the grass' },
    { id: 10, text: 'Buy groceries' },
  ]);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [visibleActionButtonsId, setVisibleActionButtonsId] = useState<
    number | undefined
  >(undefined);
  const [deleteTodoId, setDeleteTodoId] = useState<number | undefined>(
    undefined,
  );

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

  const handleSelectButton = () => {
    console.log('select button clicked');
  };

  const handleKebabIconClick = (id: number) => {
    setVisibleActionButtonsId(id === visibleActionButtonsId ? undefined : id);
  };

  const handleDeleteTodo = (id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    setDeleteTodoId(id);
  };

  const confirmDeleteTodo = () => {
    if (deleteTodoId !== undefined) {
      setTodos(todos.filter((todo) => todo.id !== deleteTodoId));
      setDeleteTodoId(undefined);
    }
  };

  const cancelDeleteTodo = () => {
    setDeleteTodoId(undefined);
  };

  // const handleUpdateTodo = (id: number) => {
  //   // Update logic here
  // };

  const handleAddTodo = () => {
    const newTodo = { id: todos.length + 1, text: `Task ${todos.length + 1}` };
    setTodos([...todos, newTodo]);
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
        {todos.length === 0 && !searchKeyword && <EmptyTodoList />}
        {todos.length > 0 &&
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              visibleActionButtonsId={visibleActionButtonsId}
              onClick={() => setVisibleActionButtonsId(undefined)}
              handleKebabIconClick={handleKebabIconClick}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        {searchKeyword && filteredTodos.length === 0 && (
          <EmptyTodoList forSearchResult={true} />
        )}
      </div>
      {!searchKeyword && todos.length > 0 && (
        <Link to="/add-todo">
          <AddButton onClick={handleAddTodo} />
        </Link>
      )}
      {deleteTodoId !== undefined && (
        <DeleteConfirmDialog
          onCancel={cancelDeleteTodo}
          onConfirm={confirmDeleteTodo}
        />
      )}
    </AppContainer>
  );
};

export default Home;
