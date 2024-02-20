import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '@/utils/auth';

const CHECK_INTERVAL = 3000000; // 50 minutes in milliseconds

const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    const checkAuthentication = () => {
      const token = getToken();

      if (!token) {
        navigate('/login', { replace: true });
      } else {
        // Schedule the next check after the interval
        setTimer(
          setTimeout(() => {
            checkAuthentication();
          }, CHECK_INTERVAL),
        );
      }
    };

    // Initial check on component mount
    checkAuthentication();

    // Cleanup function to clear timer on unmount
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [navigate, timer]);

  return children;
};

export default ProtectedRoutes;
