// import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaKey, FaEnvelope, FaUser } from 'react-icons/fa';
import { RiBearSmileFill, RiCheckboxCircleFill } from 'react-icons/ri';
import styles from './SignUp.module.scss';
import Logo from '../common/Logo';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({ mode: 'onBlur' });

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // const mutation = useMutation(usernameLogIn, {
  //   onMutate: () => {
  //     console.log('mutation starting');
  //   },
  //   onSuccess: () => {
  //     console.log('mutation is successful, API CALL SUCCESS');
  //     queryClient.refetchQueries(['myinfo']);
  //     navigate('/');
  //   },
  //   onError: () => {
  //     console.log('mutation has an error, API CALL ERROR');
  //   },
  // });

  // const onSubmit = ({ username, email, password }) => {
  //   mutation.mutate({ username, email, password });
  //   console.log('username', username);
  //   console.log('email', email);
  //   console.log('password', password);
  // };

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
        <form className={styles.form} onSubmit={handleSubmit()}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputBox}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                {...register('username', {
                  required: '아이디를 입력해주세요.',
                })}
                placeholder="아이디"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <FaEnvelope className={styles.icon} />
              <input
                type="email"
                {...register('email', {
                  required: '이메일을 입력해주세요.',
                  // pattern: {
                  //   value: /\S+@\S+\.\S+/,
                  //   message: '이메일 형식에 맞지 않습니다.',
                  // },
                })}
                placeholder="이메일"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <FaKey className={styles.icon} />
              <input
                id="password"
                type="password"
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                  minLength: {
                    value: 8,
                    message: '8자리 이상 입력해주세요.',
                  },
                  // pattern: {
                  //   value: ㅇㄹ,
                  // }
                })}
                placeholder="비밀번호"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <RiCheckboxCircleFill className={styles.icon} />
              <input
                type="password"
                {...register('passwordConfirm', {
                  required: '비밀번호를 입력해주세요.',
                })}
                placeholder="비밀번호 확인"
                required
              />
            </div>
            <div className={styles.inputBox}>
              <RiBearSmileFill className={styles.icon} />
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
