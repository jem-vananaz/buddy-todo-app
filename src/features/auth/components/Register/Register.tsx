import AuthForm from '@/components/AuthForm/AuthForm';

const Register = () => {
  return (
    <AuthForm
      isRegister={true}
      buttonText="Register"
      bottomLinkText="I have an account."
      bottomLinkTo="/login"
    />
  );
};

export default Register;
