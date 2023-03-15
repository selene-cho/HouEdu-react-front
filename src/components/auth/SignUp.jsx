// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { FaKey, FaEnvelope, FaCheckCircle, FaGrinSquint } from 'react-icons/fa';
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
            <div className={styles.inputBox}>
              <FaEnvelope className={styles.icon} />
              <input type="email" placeholder="이메일" required />
            </div>
            <div className={styles.inputBox}>
              <FaKey className={styles.icon} />
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <FaCheckCircle className={styles.icon} />
              <input type="password" placeholder="비밀번호 확인" required />
            </div>
            <div className={styles.inputBox}>
              <FaGrinSquint className={styles.icon} />
              <input
                type="text"
                name="nickname"
                placeholder="닉네임"
                required
              />
            </div>
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
}
