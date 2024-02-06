import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TodoItem, { TodoItemProps } from './TodoItem';

const meta: Meta<TodoItemProps> = {
  title: 'Components/TodoItem',
  component: TodoItem,
  argTypes: {
    onClick: { action: 'clicked' },
    handleKebabIconClick: { action: 'kebabIconClicked' },
    handleDeleteTodo: { action: 'deleteTodoClicked' },
  },
};

export default meta;

type TemplateArgs = Omit<
  TodoItemProps,
  'id' | 'text' | 'visibleActionButtonsId'
> & {
  id?: number;
  text?: string;
};

const Template: StoryObj<TemplateArgs> = ({
  id = 1,
  text = 'Get my mac fixed',
}) => {
  const [visibleButtons, setVisibleButtons] = useState<number | undefined>(
    undefined,
  );

  const handleKebabIconClick = () => {
    setVisibleButtons(visibleButtons === id ? undefined : id);
  };

  return (
    <TodoItem
      id={id}
      text={text}
      visibleActionButtonsId={visibleButtons}
      onClick={action('TodoItem clicked')}
      handleKebabIconClick={handleKebabIconClick}
      handleDeleteTodo={action('deleteTodoClicked')}
    />
  );
};

export const Default: StoryObj<TemplateArgs> = Template;
Default.args = {
  id: 1,
  text: 'Get my mac fixed',
  onClick: action('TodoItem clicked'),
  handleDeleteTodo: action('deleteTodoClicked'),
};
