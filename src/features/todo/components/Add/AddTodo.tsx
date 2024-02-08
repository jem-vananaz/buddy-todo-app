import TodoComponent from '@/components/Todo/TodoComponent';

const AddTodo = () => {
  const handleAddTodo = (todoValue: string) => {
    console.log('Adding todo:', todoValue);
    // Add logic here to actually save the todo
  };

  return (
    <TodoComponent
      title="Add to do"
      actionNotificationMessage="To do saved"
      onAction={handleAddTodo}
    />
  );
};

export default AddTodo;
