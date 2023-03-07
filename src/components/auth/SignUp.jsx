// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import styles from './SignUp.module.scss';
import Logo from '../common/Logo';

export default function SignUp() {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.container}>
        <p>
          이미 회원이신가요?
          <Link to="/login">
            <span>로그인하기</span>
          </Link>
        </p>
        <form className={styles.form}>
          <input type="email" placeholder="이메일" />
          <input id="password" type="password" placeholder="비밀번호" />
          <p>아이디 | 비밀번호 찾기</p>
          <input
            type="text"
            name="username"
            // onChange={onChange}
            // value={username}
            placeholder="이름"
            required
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
