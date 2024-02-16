import { getToken } from './auth';

const BASE_URL = 'http://localhost:3000/api';

export interface ErrorResponse {
  message: string;
}

export interface Todo {
  _id: string;
  text: string;
  status: string;
}

// Function to add a todo
export const addTodoEndpoint = async (todoValue: string): Promise<Todo> => {
  const token = getToken();
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text: todoValue }),
  });
  return response.json() as Promise<Todo>;
};

// Function to fetch all todos
export const fetchTodosEndpoint = async (): Promise<Todo[]> => {
  const token = getToken();
  const response = await fetch(`${BASE_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json() as Promise<Todo[]>;
};

// Function to fetch a todo by id
export const fetchTodoById = async (todoId: string): Promise<Todo> => {
  const token = getToken();
  const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json() as Promise<Todo>;
};

// Function to update a todo by id
export const updateTodoEndpoint = async (
  todoId: string,
  updatedText: string,
): Promise<Todo> => {
  const token = getToken();
  const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text: updatedText }),
  });
  return response.json() as Promise<Todo>;
};

// Function to delete a todo by id
export const deleteTodoEndpoint = async (todoId: string): Promise<void> => {
  const token = getToken();
  await fetch(`${BASE_URL}/todos/${todoId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Function to complete multiple todos
export const completeTodosEndpoint = async (
  todoIds: string[],
): Promise<void> => {
  const token = getToken();
  await fetch(`${BASE_URL}/complete-todos`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ todoIds }),
  });
};

// Auth Endpoints
// Function to register a new user
export const registerEndpoint = async (credentials: {
  email: string;
  password: string;
}): Promise<{ message: string; token?: string }> => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
};

// Function to login
export const loginEndpoint = async (credentials: {
  email: string;
  password: string;
}): Promise<{ token: string }> => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
};
