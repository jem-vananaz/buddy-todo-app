interface TokenData {
  exp: number;
  iat: number;
}

// Function to retrieve the JWT token from local storage
export const getToken = (): string | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  const tokenPayload = token.split('.')[1];
  const tokenData = JSON.parse(atob(tokenPayload)) as TokenData;
  const expiration = tokenData.exp * 1000; // Convert to milliseconds
  const currentTime = new Date().getTime();

  if (currentTime > expiration) {
    removeToken(); // Remove expired token
    return null;
  }

  return token;
};

// Function to set the JWT token in local storage
export const setToken = (token: string): void => {
  localStorage.setItem('token', token);
};

// Function to remove the JWT token from local storage
export const removeToken = (): void => {
  localStorage.removeItem('token');
};
