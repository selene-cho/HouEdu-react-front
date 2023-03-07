// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import styles from './Login.module.scss';
import Logo from '../common/Logo';

export default function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('login click');
  };

  // const onChange = (e) => {
  //   const { name, value } = e.currentTarget;

  //   console.log(name, value);

  //   if (name === 'username') {
  //     setUsername(value);
  //   } else if (name === 'password') {
  //     setPassword(value);
  //   }
  // };

  return (
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.container}>
        <p>
          회원이 아니신가요?&nbsp;&nbsp;
          <Link to="/signup">
            <span>회원가입하기</span>
          </Link>
        </p>
        <form className={styles.form} onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            // onChange={onChange}
            // value={email}
            placeholder="이메일"
            required
          />
          <input
            type="password"
            name="password"
            // onChange={onChange}
            // value={password}
            placeholder="비밀번호"
            required
          />
          <span>{BsFillEyeSlashFill}</span>
          <p>아이디 | 비밀번호 찾기</p>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
