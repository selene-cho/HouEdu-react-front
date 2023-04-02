import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styles from './SocialLogin.module.scss';

export default function SocialLogin() {
  const kakaoParams = {
    client_id: process.env.REACT_APP_KAKAO_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
    response_type: 'code',
  };
  const kakao_params = new URLSearchParams(kakaoParams).toString();

  const googleParams = {
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
    response_type: 'code',
    scope: 'email profile',
  };
  const google_params = new URLSearchParams(googleParams).toString();

  return (
    <div className={styles.snsLogin}>
      {/* <button className={styles.google}>
        <Link
          to={`https://accounts.google.com/o/oauth2/v2/auth?${google_params}`}
          className={styles.link}
        >
          <FcGoogle className={styles.sns} />
        </Link>
      </button> */}
      <button className={styles.github}>
        <Link
          to={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=read:user,user:email`}
          className={styles.link}
        >
          <BsGithub className={styles.sns} />
        </Link>
      </button>
      <button className={styles.kakao}>
        <Link
          to={`https://kauth.kakao.com/ouath/authorize?${kakao_params}`}
          className={styles.link}
        >
          <RiKakaoTalkFill className={styles.sns} />
        </Link>
      </button>
    </div>
  );
}
