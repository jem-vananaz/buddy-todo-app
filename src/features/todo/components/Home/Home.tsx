import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { AppContainer } from './elements';
import TodoList from '@/components/Todo/TodoList/TodoList';
import HeaderComponent from '@/components/Header/Header';
import { Todo, fetchTodosEndpoint } from '@/utils/api';
import { removeToken } from '@/utils/auth';

const Home = () => {
  const { data: todos } = useQuery<Todo[], Error>('todos', fetchTodosEndpoint);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectButtonClicked, setSelectButtonClicked] = useState(false);

  const navigate = useNavigate();

  const handleSelectButton = () => {
    setSelectButtonClicked(!selectButtonClicked);
  };

  const handleTodosMutationSuccess = () => {
    setSelectButtonClicked(false); // Reset selectButtonClicked to false after mutation success
  };

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <AppContainer>
      <HeaderComponent
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        handleSelectButton={handleSelectButton}
        handleLogout={handleLogout}
      />
      <TodoList
        todos={todos}
        searchKeyword={searchKeyword}
        selectButtonClicked={selectButtonClicked}
        handleTodosMutationSuccess={handleTodosMutationSuccess}
      />
    </AppContainer>
  );
};

export default Home;
