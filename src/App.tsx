import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import SearchField from './components/SearchField/SearchField';
import Button from './components/Buttons/Button';
import LogoutButton from './components/Buttons/LogoutButton';
import kebabIcon from './assets/kebab-icon.svg';
import kebabIconBlue from './assets/kebab-icon-blue.svg';

const AppContainer = styled.div`
  flex-direction: column;
  margin-top: 20px;
`;

const Header = styled.div`
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: auto 1fr; /* Auto-sized column for TodoTitle, 1fr-sized column for spacing, and auto-sized column for LogoutButton */
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: flex-start; /* Align items at the start (left) */
  margin-bottom: 8px;

  @media (min-width: 600px) {
    margin-bottom: 0;
    grid-column: 1 / -1; /* Span across all columns */
  }
`;

const TodoTitle = styled.h1`
  color: #2F80ED;
  font-family: 'Roboto', sans-serif;
  margin-right: 16px;
  margin-top: 0;
  font-size: 24px;

  @media (min-width: 600px) {
    font-size: 32px;
  }
`;

const SearchFieldWrapper = styled.div`
  display: flex;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & > *:first-child {
      margin-right: 12px; /* Add margin to the right of the first child (SearchField) */
    }
  }
`;

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin-bottom: 8px;
  cursor: pointer;

  &:not(.action-buttons-visible):hover {
    background-color: #f0f0f0;
  }
`;

const TodoText = styled.div`
  flex-grow: 1;
`;

const KebabIconContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const KebabIcon = styled.img`
  cursor: pointer;
  transition: filter 0.3s;
  filter: brightness(${(props) => (props.isVisible ? 1.5 : 1)});

  ${KebabIconContainer}:hover &,
  ${KebabIconContainer}:focus &,
  &.blue {
    filter: brightness(1.5);
    content: url(${kebabIconBlue});
  }
`;

const ActionButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: normal;

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;

const ActionButtons = styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  position: absolute;
  top: 50%;
  right: 100%;
  transform: translate(1px, -20%);
  flex-direction: column;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  align-items: flex-start;
  width: 115px;
  height: 75px;
  margin-right: 7px;
  z-index: 1;
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  background-color: #2F80ED;
  color: #fff;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
`;

function App() {
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
  const [visibleActionButtonsId, setVisibleActionButtonsId] = useState(null);

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  
  const handleKebabIconClick = (id) => {
    setVisibleActionButtonsId(id === visibleActionButtonsId ? null : id);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdateTodo = (id) => {
    // Update logic here
  };
  
  const handleAddTodo = () => {
    const newTodo = { id: todos.length + 1, text: `Task ${todos.length + 1}` };
    setTodos([...todos, newTodo]);
  };

  const handleLogout = () => {
    // Add your logout logic here
  };

  return (
    <AppContainer>
      <Header>
        <TitleRow>
          <TodoTitle>ToDoish</TodoTitle>
          <LogoutButton onClick={handleLogout} />
        </TitleRow>
        <SearchFieldWrapper>
          <SearchField
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <Button label={'Select'} />
        </SearchFieldWrapper>
      </Header>
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItemContainer 
            key={todo.id} 
            onClick={() => setVisibleActionButtonsId(null)}
            className={visibleActionButtonsId === todo.id ? 'action-buttons-visible' : ''}
          >
            <TodoText>{todo.text}</TodoText>
            <KebabIconContainer>
              <KebabIcon
                src={kebabIcon}
                alt="Kebab Icon"
                className={visibleActionButtonsId === todo.id ? 'blue' : ''}
                isVisible={visibleActionButtonsId === todo.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleKebabIconClick(todo.id);
                }}
              />
              <ActionButtons isVisible={visibleActionButtonsId === todo.id}>
                <ActionButton onClick={() => handleUpdateTodo(todo.id)}>Update</ActionButton>
                <ActionButton onClick={() => handleDeleteTodo(todo.id)}>Delete</ActionButton>
              </ActionButtons>
            </KebabIconContainer>
          </TodoItemContainer>
        ))}
      </div>
      <AddButton onClick={handleAddTodo}>+</AddButton>
    </AppContainer>
  );
}

export default App;
