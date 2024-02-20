import { StoryObj, Meta } from '@storybook/react';
import TodoOptionsDialog, { TodoOptionsDialogProps } from './TodoOptionsDialog';

const meta: Meta<TodoOptionsDialogProps> = {
  title: 'Components/Dialogs',
  component: TodoOptionsDialog,
  argTypes: {
    onSelectAll: { action: 'selected all' },
    onCompleteSelected: { action: 'completed selected' },
    onDeleteSelected: { action: 'deleted selected' },
  },
};

export default meta;

type StoryType = StoryObj<TodoOptionsDialogProps>;

export const TodoOptions: StoryType = (args: TodoOptionsDialogProps) => (
  <TodoOptionsDialog {...args} />
);
TodoOptions.args = {};
