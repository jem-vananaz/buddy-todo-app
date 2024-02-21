import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClient and QueryClientProvider
import AuthForm, { AuthFormProps } from './AuthForm';

const meta: Meta = {
  title: 'Components/AuthForm',
  component: AuthForm,
  argTypes: {
    isRegister: { control: 'boolean' },
    buttonText: { control: 'text' },
    bottomLinkText: { control: 'text' },
    bottomLinkTo: { control: 'text' },
  },
};

export default meta;

type StoryType = StoryObj<AuthFormProps>;

const queryClient = new QueryClient(); // Create a QueryClient instance

export const AuthFormRegister: StoryType = (args: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

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
    // Simulating register or login API call
  };

  return (
    <QueryClientProvider client={queryClient}>
      {' '}
      {/* Provide the QueryClient instance */}
      <Router>
        <AuthForm
          {...args}
          email={email}
          password={password}
          emailErrorMessage={emailErrorMessage}
          isDisabled={isDisabled}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
          onSubmitForm={handleSubmitForm}
        />
      </Router>
    </QueryClientProvider>
  );
};

AuthFormRegister.args = {
  isRegister: true,
  buttonText: 'Register',
  bottomLinkText: 'Already have an account? Login',
  bottomLinkTo: '/login',
};

export const AuthFormLogin: StoryType = (args: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

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
    // Simulating login API call
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthForm
          {...args}
          email={email}
          password={password}
          emailErrorMessage={emailErrorMessage}
          isDisabled={isDisabled}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
          onSubmitForm={handleSubmitForm}
        />
      </Router>
    </QueryClientProvider>
  );
};

AuthFormLogin.args = {
  isRegister: false,
  buttonText: 'Login',
  bottomLinkText: "Don't have an account? Register",
  bottomLinkTo: '/register',
};
