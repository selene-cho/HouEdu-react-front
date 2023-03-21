import { Link, useNavigate } from 'react-router-dom';
import { FaKey, FaEnvelope, FaUser } from 'react-icons/fa';
import { RiBearSmileFill, RiCheckboxCircleFill } from 'react-icons/ri';
import styles from './SignUp.module.scss';
import Logo from '../common/Logo';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signUp } from '../../api/api';
import { useCallback, useState } from 'react';

export default function SignUp() {
  // const [passwordConfirm, setPasswordConfirm] = useState('');
  // const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  // const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    watch,
    reset,
  } = useForm();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(signUp, {
    onMutate: () => {
      console.log('mutation starting');
    },
    onSuccess: () => {
      console.log('mutation is successful, API CALL SUCCESS');
      queryClient.refetchQueries(['myinfo']);
      navigate('/');
    },
    onError: () => {
      console.log('mutation has an error, API CALL ERROR');
    },
  });

  // const onChangePasswordConfirm = useCallback(
  //   (e) => {
  //     const passwordConfirmCurrent = e.target.value;
  //     setPasswordConfirm(passwordConfirmCurrent);

  //     if (password === passwordConfirmCurrent) {
  //       setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )');
  //       setIsPasswordConfirm(true);
  //     } else {
  //       setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ');
  //       setIsPasswordConfirm(false);
  //     }
  //   },
  //   [password]
  // );

  const onSubmit = ({
    username,
    email,
    password,
    passwordConfirm,
    nickname,
  }) => {
    if (password !== passwordConfirm) {
      setError(
        'passwordConfirm',
        { message: '비밀번호가 일치하지 않습니다.' },
        { shouldFocus: true } // 에러 발생시 발생한 곳으로 이동
      );
    }
    mutation.mutate({ username, email, password, nickname });
    console.log('username', username);
    console.log('email', email);
    console.log('password', password);
    console.log('passwordConfirm', passwordConfirm);
    console.log('nickname', nickname);
  };

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
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputWrapper}>
            <div className={styles.inputBox}>
              <FaUser className={styles.icon} />
              <input
                type="text"
                {...register('username', {
                  required: '아이디를 입력해주세요.',
                  minLength: {
                    value: 8,
                    message: '아이디는 8자리 이상 입력해주세요.',
                  },
                })}
                placeholder="아이디"
              />
            </div>
            {errors.username && (
              <div className={styles.error}>{errors.username.message}</div>
            )}
            <div className={styles.inputBox}>
              <FaEnvelope className={styles.icon} />
              <input
                // type="email"
                {...register('email', {
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '이메일 형식에 맞지 않습니다.',
                  },
                })}
                placeholder="이메일"
              />
            </div>
            {errors.email && (
              <div className={styles.error}>{errors.email.message}</div>
            )}
            {/* {mutation.isError ? (
              <div className={styles.error}>이미 존재하는 이메일입니다.</div>
            ) : null} */}
            <div className={styles.inputBox}>
              <FaKey className={styles.icon} />
              <input
                id="password"
                type="password"
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                  pattern: {
                    value:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~`?!@#$%^&*()_=+<>/'":;{}\|])/,
                    message:
                      '비밀번호는 반드시 영대소문자+숫자+특수문자를 포함한 8~20자리여야 합니다.',
                  },
                  minLength: {
                    value: 8,
                    message:
                      '비밀번호는 반드시 영대소문자+숫자+특수문자를 포함한 8~20자리여야 합니다.',
                  },
                  maxLength: {
                    value: 20,
                    message:
                      '비밀번호는 반드시 영대소문자+숫자+특수문자를 포함한 8~20자리여야 합니다.',
                  },
                })}
                placeholder="비밀번호"
              />
            </div>
            {errors.password && (
              <div className={styles.error}>{errors.password.message}</div>
            )}
            <div className={styles.inputBox}>
              <RiCheckboxCircleFill className={styles.icon} />
              <input
                type="password"
                {...register('passwordConfirm', {
                  required: '비밀번호를 한번 더 입력해주세요.',
                })}
                placeholder="비밀번호 확인"
              />
            </div>
            {errors.passwordConfirm && (
              <div className={styles.error}>
                {errors.passwordConfirm.message}
              </div>
            )}
            <div className={styles.inputBox}>
              <RiBearSmileFill className={styles.icon} />
              <input
                type="text"
                {...register('nickname', {
                  required: '닉네임을 입력해주세요.',
                })}
                placeholder="닉네임"
              />
            </div>
            {errors.nickname && (
              <div className={styles.error}>{errors.nickname.message}</div>
            )}
          </div>
          {mutation.isError}
          <button
            type="submit"
            // onClick={() => {
            //   setError;
            // }}
          >
            회원가입
          </button>
          {/* <p>{errors.}</p> */}
        </form>
      </div>
    </div>
  );
}
