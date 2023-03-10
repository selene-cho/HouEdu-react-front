import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { REDIRECT_URI, REST_API_KEY } from './KakaoLoginData';

export default function KakaoLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split('=')[1];

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
        } else {
          navigate('/');
        }
      });
  };

  useEffect(() => {
    if (!location.search) return;
    getKakaoToken();
  }, []);

  return (
    <div>
      <p>KAKAO LOGIN</p>
    </div>
  );
}
