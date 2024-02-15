import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import todoishLogo from '@/assets/todoish-logo.svg';
import {
  AuthContainer,
  AuthHeader,
  TodoishLogo,
  AuthContent,
  AuthTitle,
  AuthTagline,
  AuthFormContainer,
  FormButton,
  ErrorMessage,
  GeneralErrorMessage,
  Text,
  StyledLink,
} from './elements';
import TextField from '@/components/TextField/TextField';
import { registerEndpoint, loginEndpoint, ErrorResponse } from '@/utils/api';
import { setToken } from '@/utils/auth';

interface AuthFormProps {
  isRegister: boolean;
  buttonText: string;
  bottomLinkText: string;
  bottomLinkTo: string;
}

const AuthForm = ({
  isRegister,
  buttonText,
  bottomLinkText,
  bottomLinkTo,
}: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();

  const mutation = useMutation(isRegister ? registerEndpoint : loginEndpoint, {
    onSuccess: (data) => {
      const token = data?.token;
      if (token) {
        setToken(token);
        navigate('/');
      } else {
        setErrorMessage('Token is missing or invalid');
      }
    },
    onError: (error: ErrorResponse) => {
      if (error && error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(
          isRegister
            ? 'An error occurred during registration'
            : 'An error occurred during login',
        );
      }
    },
  });

  const handleEmailChange = (value: string) => {
    setEmail(value);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setEmailErrorMessage(
      value ? (isValidEmail ? '' : 'Invalid email format') : '',
    );
    updateButtonState(value, password);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    updateButtonState(email, value);
  };

  const updateButtonState = (email: string, password: string) => {
    setIsDisabled(!email || !password || !!emailErrorMessage);
  };

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    mutation.mutate({ email, password });
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
      <div className="form-container">
        <AuthFormContainer>
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
          <FormButton
            type="submit"
            disabled={isDisabled}
            onClick={handleSubmitForm}>
            {buttonText}
          </FormButton>
          <Text>
            <StyledLink to={bottomLinkTo}>{bottomLinkText}</StyledLink>
          </Text>
          {errorMessage && (
            <GeneralErrorMessage>{errorMessage}</GeneralErrorMessage>
          )}
        </AuthFormContainer>
      </div>
    </AuthContainer>
  );
};

export default AuthForm;
