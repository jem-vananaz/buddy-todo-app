import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TodoItem, { TodoItemProps } from './TodoItem';
import styled from 'styled-components';

const meta: Meta<TodoItemProps> = {
  title: 'Components/TodoItem',
  component: TodoItem,
  argTypes: {
    onClick: { action: 'clicked' },
    handleKebabIconClick: { action: 'kebabIconClicked' },
    handleUpdateTodo: { action: 'updateTodoClicked' },
    handleDeleteTodo: { action: 'deleteTodoClicked' },
    handleSelectTodo: { action: 'selectTodoClicked' }, // Add action for selecting todo
  },
};

export default meta;

type TemplateArgs = Omit<
  TodoItemProps,
  'id' | 'text' | 'visibleActionButtonsId'
> & {
  id?: string;
  text?: string;
};

const Container = styled.div`
  max-width: 320px;
`;

const Template = ({ id = '1', text = 'Get my mac fixed' }: TemplateArgs) => {
  const [visibleButtons, setVisibleButtons] = useState<string | undefined>(
    undefined,
  );

  const handleTodoItemClick = () => {
    setVisibleButtons(undefined);
  };

  const handleKebabIconClick = (id: string) => {
    setVisibleButtons(visibleButtons === id ? undefined : id);
  };

  return (
    <Container>
      <TodoItem
        id={id}
        text={text}
        status="active"
        isSelectedForDeletion={false}
        visibleActionButtonsId={visibleButtons}
        onClick={handleTodoItemClick}
        showCheckbox={false}
        isSelected={false}
        handleSelectTodo={action('selectTodoClicked')}
        handleKebabIconClick={handleKebabIconClick}
        handleUpdateTodo={action('updateTodoClicked')}
        handleDeleteTodo={action('deleteTodoClicked')}
      />
    </Container>
  );
};

export const Default: StoryObj<TemplateArgs> = Template;
Default.args = {
  id: '1',
  text: 'Get my mac fixed',
  onClick: action('TodoItem clicked'),
  handleUpdateTodo: action('updateTodoClicked'),
  handleDeleteTodo: action('deleteTodoClicked'),
};
