import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BsFillEyeSlashFill, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FaKey, FaEnvelope } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import styles from './Login.module.scss';
import Logo from '../common/Logo';

import { isLoggedInVar } from '../../apollo';
import { REST_API_KEY, REDIRECT_URI } from './KakaoLoginData';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('login click');
    isLoggedInVar(true);
    console.log(isLoggedInVar);
  };

  const onChange = (e) => {
    const { name, value } = e.currentTarget;

    console.log(name, value);

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.lef = KAKAO_AUTH_URL;
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.wrapper}>
        <p>
          아직 회원이 아니신가요?&nbsp;&nbsp;
          <Link to="/signup">
            <span>회원가입하기</span>
          </Link>
        </p>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputBox}>
              <FaEnvelope className={styles.icon} />
              <input
                type="email"
                name="email"
                onChange={onChange}
                value={email}
                placeholder="이메일"
                required
              />
            </div>

            <div className={styles.inputBox}>
              <FaKey className={styles.icon} />
              <input
                type="password"
                name="password"
                onChange={onChange}
                value={password}
                placeholder="비밀번호"
                required
              />
            </div>
          </div>
          <div>
            <a href="#">아이디</a>
            <span>&nbsp;|&nbsp;</span>
            <a href="#">비밀번호 찾기</a>
          </div>
          <button type="submit">로그인</button>
        </form>
        <div className={styles.divider}>
          <div></div>
          <span>OR</span>
          <div></div>
        </div>
        <div className={styles.snsLogin}>
          <button className={styles.google}>
            <FcGoogle className={styles.sns} />
          </button>
          <button className={styles.github}>
            <BsGithub className={styles.sns} />
          </button>
          <button className={styles.kakao} onClick={handleLogin}>
            <RiKakaoTalkFill className={styles.sns} />
          </button>
        </div>
      </div>
    </div>
  );
}
