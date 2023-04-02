import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { googleLogIn } from '../../api/api';
import styles from './GoogleLogin.module.scss';

export default function GoogleLogin() {
  const { search } = useLocation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get('code');
    if (code) {
      const status = await googleLogIn(code);
      if (status === 200) {
        queryClient.refetchQueries(['myinfo']);
        navigate('/');
      }
    }
  };
  useEffect(() => {
    confirmLogin();
  }, []);
  return (
    <div className={styles.container}>
      <p>로그인 중입니다...</p>
      <p>잠시만 기다려 주세요</p>
    </div>
  );
}
