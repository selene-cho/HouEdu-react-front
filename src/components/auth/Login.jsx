import { Link, useNavigate } from 'react-router-dom';
import { FaKey, FaUser } from 'react-icons/fa';
import styles from './Login.module.scss';
import Logo from '../common/Logo';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { usernameLogIn } from '../../api/api';
// import { useState } from 'react';
// import Modal from '../common/Modal';

export default function Login() {
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
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
    // { username, password } API Call 할 때의 매개변수
    mutation.mutate({ username, password });
    // console.log('username', username);
    // console.log('password', password);
  };

  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.wrapper}>
        <p>
          회원이 아니신가요?&nbsp;
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
                })}
                placeholder="비밀번호"
                required
              />
              {mutation.isError}
            </div>
          </div>
          {mutation.isError ? (
            <div className={styles.error}>
              <p>아이디 또는 비밀번호를 잘못 입력했습니다.</p>
              <p>입력하신 내용을 다시 확인해주세요.</p>
            </div>
          ) : null}
          <button type="submit" disabled={isSubmitting}>
            로그인
          </button>
        </form>
        {/* <div className={styles.searchIdPw}>
          <button onClick={openModal}>아이디</button>
          <Modal open={modalOpen} close={closeModal} header="아이디 찾기">
            아이디 찾기
          </Modal>
          <span>&nbsp;|&nbsp;</span>
          <button onClick={openModal}>비밀번호 찾기</button>
          <Modal open={modalOpen} close={closeModal} header="비밀번호 찾기">
            비밀번호 찾기
          </Modal>
        </div> */}
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
