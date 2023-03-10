// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import styles from './SignUp.module.scss';
import Logo from '../common/Logo';

export default function SignUp() {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.wrapper}>
        <p>
          이미 회원이신가요?&nbsp;&nbsp;
          <Link to="/login">
            <span>로그인하기</span>
          </Link>
        </p>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <input type="email" placeholder="이메일" required />
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              required
            />
            <input type="password" placeholder="비밀번호 확인" required />
            <input
              type="text"
              name="username"
              // onChange={onChange}
              // value={username}
              placeholder="닉네임"
              required
            />
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
}
