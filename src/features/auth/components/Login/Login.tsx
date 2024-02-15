import AuthForm from '@/components/AuthForm/AuthForm';

const Login = () => {
  return (
    <AuthForm
      isRegister={false}
      buttonText="Login"
      bottomLinkText="I am new here!"
      bottomLinkTo="/register"
    />
  );
};

export default Login;
