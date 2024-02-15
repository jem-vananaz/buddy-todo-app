import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import TextField from '@/components/TextField/TextField';
import { loginEndpoint, ErrorResponse } from '@/utils/api';
import { setToken } from '@/utils/auth';

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LoginButton = styled.button`
  width: 100%;
  margin-top: 15px;
  background-color: #2f80ed;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #0b0c0d;
  }
  &:disabled {
    background-color: #9abff1;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #ed2f2f;
  font-size: 12px;
  margin-left: -75px;
  margin-top: -10px;
  margin-bottom: 15px;
`;

const GeneralErrorMessage = styled.div`
  color: #ed2f2f;
  font-size: 12px;
  margin-left: -25px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const navigate = useNavigate();

  const loginMutation = useMutation(loginEndpoint, {
    onSuccess: (data) => {
      const { token } = data;
      setToken(token);
      console.log('Login successful. Token:', token);
      navigate('/');
    },
    onError: (error: ErrorResponse) => {
      if (error && error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An error occurred during login');
      }
    },
  });

  const handleEmailChange = (value: string) => {
    setEmail(value);

    if (!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailErrorMessage('');
    } else {
      setEmailErrorMessage('Invalid email format');
    }
    updateButtonState(value, password);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    updateButtonState(email, value);
  };

  const updateButtonState = (email: string, password: string) => {
    setIsDisabled(!email || !password || !!emailErrorMessage);
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <LoginWrapper>
      <LoginForm>
        <h2>Login</h2>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailErrorMessage && <ErrorMessage>{emailErrorMessage}</ErrorMessage>}
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <LoginButton onClick={handleLogin} disabled={isDisabled}>
          Login
        </LoginButton>
        {errorMessage && (
          <GeneralErrorMessage>{errorMessage}</GeneralErrorMessage>
        )}
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
