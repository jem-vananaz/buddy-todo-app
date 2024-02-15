import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '@/utils/auth';

const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      if (!getToken()) {
        navigate('/login', { replace: true });
      }
    };

    checkAuthentication();
  }, [navigate]);

  return children;
};

export default ProtectedRoutes;
