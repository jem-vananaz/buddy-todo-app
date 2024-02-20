// import { useState } from 'react';
// import { StoryObj, Meta } from '@storybook/react';
// import AuthForm, { AuthFormProps } from './AuthForm';

// const meta: Meta = {
//   title: 'Components/AuthForm',
//   component: AuthForm,
//   argTypes: {
//     isRegister: { control: 'boolean' },
//     buttonText: { control: 'text' },
//     bottomLinkText: { control: 'text' },
//     bottomLinkTo: { control: 'text' },
//   },
// };

// export default meta;

// type StoryType = StoryObj<AuthFormProps>;

// export const Register: StoryType = (args: StoryType) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailErrorMessage, setEmailErrorMessage] = useState('');
//   const [isDisabled, setIsDisabled] = useState(true);

//   const handleEmailChange = (value: string) => {
//     setEmail(value);
//     const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//     setEmailErrorMessage(
//       value ? (isValidEmail ? '' : 'Invalid email format') : '',
//     );
//     updateButtonState(value, password);
//   };

//   const handlePasswordChange = (value: string) => {
//     setPassword(value);
//     updateButtonState(email, value);
//   };

//   const updateButtonState = (email: string, password: string) => {
//     setIsDisabled(!email || !password || !!emailErrorMessage);
//   };

//   const handleSubmitForm = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Simulating register API call
//   };

//   return (
//     <AuthForm
//       {...args}
//       email={email}
//       password={password}
//       emailErrorMessage={emailErrorMessage}
//       isDisabled={isDisabled}
//       onEmailChange={handleEmailChange}
//       onPasswordChange={handlePasswordChange}
//       onSubmitForm={handleSubmitForm}
//     />
//   );
// };

// Register.args = {
//   isRegister: true,
//   buttonText: 'Register',
//   bottomLinkText: 'Already have an account? Login',
//   bottomLinkTo: '/login',
// };

// export const Login: StoryType = (args: StoryType) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailErrorMessage, setEmailErrorMessage] = useState('');
//   const [isDisabled, setIsDisabled] = useState(true);

//   const handleEmailChange = (value: string) => {
//     setEmail(value);
//     const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//     setEmailErrorMessage(
//       value ? (isValidEmail ? '' : 'Invalid email format') : '',
//     );
//     updateButtonState(value, password);
//   };

//   const handlePasswordChange = (value: string) => {
//     setPassword(value);
//     updateButtonState(email, value);
//   };

//   const updateButtonState = (email: string, password: string) => {
//     setIsDisabled(!email || !password || !!emailErrorMessage);
//   };

//   const handleSubmitForm = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Simulating login API call
//   };

//   return (
//     <AuthForm
//       {...args}
//       email={email}
//       password={password}
//       emailErrorMessage={emailErrorMessage}
//       isDisabled={isDisabled}
//       onEmailChange={handleEmailChange}
//       onPasswordChange={handlePasswordChange}
//       onSubmitForm={handleSubmitForm}
//     />
//   );
// };

// Login.args = {
//   isRegister: false,
//   buttonText: 'Login',
//   bottomLinkText: "Don't have an account? Register",
//   bottomLinkTo: '/register',
// };
