import TodoComponent from '@/components/Todo/TodoComponent';

const UpdateTodo = () => {
  const handleUpdateTodo = (todoValue: string) => {
    console.log('Updating todo:', todoValue);
    // Add logic here to actually update the todo
  };

  return (
    <TodoComponent
      title="Update to do"
      actionNotificationMessage="To do updated"
      onAction={handleUpdateTodo}
    />
  );
};

export default UpdateTodo;
