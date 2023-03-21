// import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaKey, FaEnvelope, FaUser } from 'react-icons/fa';
import styles from './Login.module.scss';
import Logo from '../common/Logo';

// import { isLoggedInVar } from '../../apollo';
// import { REST_API_KEY, REDIRECT_URI } from './KakaoLoginData';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usernameLogIn } from '../../api/api';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(usernameLogIn, {
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

  const onSubmit = ({ username, password }) => {
    mutation.mutate({ username, password });
    console.log('username', username);
    console.log('password', password);
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
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
              <FaKey className={styles.icon} />
              <input
                type="password"
                {...register('password', {
                  required: '비밀번호를 입력해주세요.',
                  // minLength: {
                  //   value: 8,
                  //   message: '8자리 이상 입력해주세요.',
                  // },
                })}
                placeholder="비밀번호"
                required
              />
              {mutation.isError}
            </div>
          </div>
          <div>
            <a href="#">아이디</a>
            <span>&nbsp;|&nbsp;</span>
            <a href="#">비밀번호 찾기</a>
          </div>
          {mutation.isError ? (
            <div className={styles.error}>
              <p>아이디 또는 비밀번호를 잘못 입력했습니다.</p>
              <p>입력하신 내용을 다시 확인해주세요.</p>
            </div>
          ) : null}
          <button type="submit">로그인</button>
        </form>
        <div className={styles.divider}>
          <div></div>
          <span>OR</span>
          <div></div>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
}

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const onSubmit = (e) => {
//   e.preventDefault();
//   console.log('login click');
//   isLoggedInVar(true);
//   console.log(isLoggedInVar);
// };

// const onChange = (e) => {
//   const { name, value } = e.currentTarget;

//   console.log(name, value);

//   if (name === 'email') {
//     setEmail(value);
//   } else if (name === 'password') {
//     setPassword(value);
//   }
// };

// const KAKAO_AUTH_URL = `"https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

// const handleLogin = () => {
//   window.location.lef = KAKAO_AUTH_URL;
// };
