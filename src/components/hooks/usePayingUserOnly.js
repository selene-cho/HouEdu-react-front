import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from './useUser';

export default function usePayingUserOnly() {
  const { userLoading, user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!user?.is_host) {
        navigate('/');
      }
    }
  }, [user, userLoading, navigate]);
  return;
}
