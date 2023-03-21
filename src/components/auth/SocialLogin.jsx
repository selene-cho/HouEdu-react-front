import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styles from './SocialLogin.module.scss';

export default function SocialLogin() {
  const kakaoParams = {
    client_id: '3502eaf7979d5335957aa3709799a122',
    redirect_uri: 'http://127.0.0.1:3000/social/kakao',
    response_type: 'code',
  };
  const params = new URLSearchParams(kakaoParams).toString();

  return (
    <div className={styles.snsLogin}>
      <button className={styles.google}>
        <Link to="" className={styles.link}>
          <FcGoogle className={styles.sns} />
        </Link>
      </button>
      <button className={styles.github}>
        <Link
          to="https://github.com/login/oauth/authorize?client_id=b40759dbc613bb53f81d&scope=read:user,user:email"
          className={styles.link}
        >
          <BsGithub className={styles.sns} />
        </Link>
      </button>
      <button className={styles.kakao}>
        <Link
          to={`https://kauth.kakao.com/ouath/authorize?${params}`}
          className={styles.link}
        >
          <RiKakaoTalkFill className={styles.sns} />
        </Link>
      </button>
    </div>
  );
}
