import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '@/utils/auth';

const CHECK_INTERVAL = 3000000; // 50 minutes in milliseconds

const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      const token = getToken();

      if (!token) {
        navigate('/login', { replace: true });
      }
    };

    // Initial check on component mount
    checkAuthentication();

    // Schedule the periodic check
    const intervalId = setInterval(checkAuthentication, CHECK_INTERVAL);

    // Cleanup function to clear interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [navigate]);

  return children;
};

export default ProtectedRoutes;
