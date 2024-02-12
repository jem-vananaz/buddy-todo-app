const BASE_URL = 'http://localhost:3000/api';

export interface Todo {
  id: string;
  title: string;
}

// Function to add a todo
export const addTodoEndpoint = async (todoValue: string): Promise<Todo> => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ todoValue }),
  });
  // Assuming your API returns a Todo object
  return response.json() as Promise<Todo>;
};

// Function to fetch all todos
export const fetchTodosEndpoint = async (): Promise<Todo[]> => {
  const response = await fetch(`${BASE_URL}/todos`);
  // Assuming your API returns an array of Todo objects
  return response.json() as Promise<Todo[]>;
};

// Function to delete a todo by id
export const deleteTodoEndpoint = async (todoId: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
    method: 'DELETE',
  });
  // Assuming your API doesn't return anything upon successful deletion
  return response.json() as Promise<void>;
};
