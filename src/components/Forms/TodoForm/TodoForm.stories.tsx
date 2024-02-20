import { useCallback } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoForm, { TodoFormProps } from './TodoForm';

const meta: Meta = {
  title: 'Components/TodoForm',
  component: TodoForm,
  argTypes: {
    onAction: { action: 'action', title: 'onAction' },
    onClear: { action: 'clear' },
  },
};

export default meta;

type StoryType = StoryObj<TodoFormProps>;

export const AddTodo: StoryType = (args: StoryType) => {
  const handleAddTodo = useCallback((todoValue: string) => {
    // Simulating add todo API call
    console.log('Adding todo with value:', todoValue);
  }, []);

  const handleClear = useCallback(() => {
    // Your clear logic here
    console.log('Clear action triggered');
  }, []);

  return (
    <Router>
      <TodoForm
        {...args}
        title="Add to do"
        onAction={handleAddTodo}
        onClear={handleClear}
      />
    </Router>
  );
};

AddTodo.args = {
  initialValue: '',
  disabled: false,
  notificationVisible: false,
  notificationMessage: 'To do saved',
  notificationDuration: 3000,
};

export const UpdateTodo: StoryType = (args: StoryType) => {
  const handleUpdateTodo = useCallback((todoValue: string) => {
    // Simulating update todo API call
    console.log('Updating todo title with value:', todoValue);
  }, []);

  const handleClear = useCallback(() => {
    // Your clear logic here
    console.log('Clear action triggered');
  }, []);

  return (
    <Router>
      <TodoForm
        {...args}
        title="Update to do"
        onAction={handleUpdateTodo}
        onClear={handleClear}
      />
    </Router>
  );
};

UpdateTodo.args = {
  initialValue: '',
  disabled: false,
  notificationVisible: false,
  notificationMessage: 'To do updated',
  notificationDuration: 1500,
};
