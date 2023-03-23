import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';

/* 강의 구매 여부에 확인하여 페이지 보호 hook */
export default function UsePayingUserOnly({ children }) {
  const { userLoading, user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading) {
      if (user?.userCourses[0] === undefined) {
        navigate('/mypage/review/notfound');
      }
    }
  }, [user, userLoading, navigate]);
  return <>{children}</>;
}
