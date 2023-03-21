import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { kakaoLogIn } from '../../api/api';
import styles from './KakaoLogin.module.scss';

export default function KakaoLogin() {
  const { search } = useLocation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search); //search는 github에서 받아온 ?code 뒤 숫자 코드
    const code = params.get('code');
    if (code) {
      const status = await kakaoLogIn(code);
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

// import React, { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { REDIRECT_URI, REST_API_KEY } from './KakaoLoginData';

// export default function KakaoLogin() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const KAKAO_CODE = location.search.split('=')[1];

//   const getKakaoToken = () => {
//     fetch(`https://kauth.kakao.com/oauth/token`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.access_token) {
//           localStorage.setItem('token', data.access_token);
//         } else {
//           navigate('/');
//         }
//       });
//   };

//   useEffect(() => {
//     if (!location.search) return;
//     getKakaoToken();
//   }, []);

//   return (
//     <div>
//       <p>KAKAO LOGIN</p>
//     </div>
//   );
// }
