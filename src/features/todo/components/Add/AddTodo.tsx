import TodoComponent from '@/components/Todo/TodoComponent';

const AddTodo = () => {
  const handleAddTodo = (todoValue: string) => {
    console.log('Adding todo:', todoValue);
    // Add logic here to actually save the todo
  };

  return (
    <TodoComponent
      title="Add to do"
      onAction={handleAddTodo}
      actionNotificationMessage="To do saved"
    />
  );
};

export default AddTodo;
