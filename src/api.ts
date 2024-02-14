const BASE_URL = 'http://localhost:3000/api';

export interface Todo {
  _id: string;
  text: string;
}

// Function to add a todo
export const addTodoEndpoint = async (todoValue: string): Promise<Todo> => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: todoValue }),
  });
  return response.json() as Promise<Todo>;
};

// Function to fetch all todos
export const fetchTodosEndpoint = async (): Promise<Todo[]> => {
  const response = await fetch(`${BASE_URL}/todos`);
  return response.json() as Promise<Todo[]>;
};

// Function to fetch a todo by id
export const fetchTodoById = async (todoId: string): Promise<Todo> => {
  const response = await fetch(`${BASE_URL}/todos/${todoId}`);
  return response.json() as Promise<Todo>;
};

// Function to update a todo by id
export const updateTodoEndpoint = async (
  todoId: string,
  updatedText: string,
): Promise<Todo> => {
  const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: updatedText }),
  });
  return response.json() as Promise<Todo>;
};

// Function to delete a todo by id
export const deleteTodoEndpoint = async (todoId: string): Promise<void> => {
  await fetch(`${BASE_URL}/todos/${todoId}`, {
    method: 'DELETE',
  });
};
