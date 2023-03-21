import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from './hooks/useUser';

/* 사용자 로그인여부 확인하여 페이지 보호 */
export default function ProtectedPage({ children }) {
  const { userLoading, isLoggedIn } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (!isLoggedIn) {
        navigate('/');
      }
    }
  }, [userLoading, isLoggedIn, navigate]);
  return <>{children}</>;
}
