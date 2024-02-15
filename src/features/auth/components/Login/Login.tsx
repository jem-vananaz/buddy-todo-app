import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import {
  AuthContainer,
  AuthHeader,
  TodoishLogo,
  AuthContent,
  AuthTitle,
  AuthTagline,
  LoginForm,
  LoginButton,
  ErrorMessage,
  GeneralErrorMessage,
} from './elements';
import TextField from '@/components/TextField/TextField';
import { loginEndpoint, ErrorResponse } from '@/utils/api';
import { setToken } from '@/utils/auth';
import todoishLogo from '@/assets/todoish-logo.svg';

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
    <AuthContainer>
      <AuthHeader>
        <TodoishLogo src={todoishLogo} alt="ToDoish Logo" />
        <AuthContent>
          <AuthTitle>ToDoish</AuthTitle>
          <AuthTagline>Do your wish, very easyish</AuthTagline>
        </AuthContent>
      </AuthHeader>
      <div className="login-form">
        <LoginForm>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            clearIconVisible={false}
          />
          {emailErrorMessage && (
            <ErrorMessage>{emailErrorMessage}</ErrorMessage>
          )}
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            clearIconVisible={false}
          />
          <LoginButton onClick={handleLogin} disabled={isDisabled}>
            Login
          </LoginButton>
          {errorMessage && (
            <GeneralErrorMessage>{errorMessage}</GeneralErrorMessage>
          )}
        </LoginForm>
      </div>
    </AuthContainer>
  );
};

export default Login;
