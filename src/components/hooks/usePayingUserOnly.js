import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from './useUser';

/* 강의 구매 여부에 확인하여 페이지 보호 hook */
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
