import { Link } from 'react-router-dom';
import styled from 'styled-components';
import todoListIcon from '@/assets/todolist-icon.svg';

const EmptyTodoListContainer = styled.div`
  text-align: center;
`;

const TodoListIcon = styled.img`
  cursor: pointer;
  padding: 0;
  width: 38.16px;
  height: 51px;
  margin-top: 200px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #403e3e;
`;

const StyledLink = styled(Link)`
  color: #2f80ed;
  cursor: pointer;
`;

const LineBreak = styled.div`
  margin-bottom: 6px;
`;

export interface EmptyTodoListProps {
  forSearchResult?: boolean;
  forSelection?: boolean;
}

const EmptyTodoList = ({ forSearchResult = false, forSelection = false }) => (
  <EmptyTodoListContainer>
    <TodoListIcon src={todoListIcon} alt="Todoist Icon" />
    <Text>
      {forSearchResult ? (
        <>
          No to do found. <LineBreak /> Try different keywords.
        </>
      ) : forSelection ? (
        'No to do yet'
      ) : (
        'To do list increases productivity'
      )}
    </Text>
    {!forSearchResult && (
      <Text>
        <StyledLink to="/add-todo">Add your first todo</StyledLink>
      </Text>
    )}
  </EmptyTodoListContainer>
);

export default EmptyTodoList;
