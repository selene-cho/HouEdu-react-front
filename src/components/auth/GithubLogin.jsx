import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { githubLogIn } from '../../api/api';
import styles from './GithubLogin.module.scss';

export default function GithubLogin() {
  const { search } = useLocation();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get('code');
    if (code) {
      await githubLogIn(code);
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
