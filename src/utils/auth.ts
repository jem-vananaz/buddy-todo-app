// Function to retrieve the JWT token from local storage
export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

// Function to set the JWT token in local storage
export const setToken = (token: string): void => {
  localStorage.setItem('token', token);
};

// Function to remove the JWT token from local storage
export const removeToken = (): void => {
  localStorage.removeItem('token');
};
