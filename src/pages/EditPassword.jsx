import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditPassword.module.scss';
import { editPassword } from '../api/api';

export default function EditPassword() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const [passwordMessage, setPasswordMessage] = useState();
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState();

  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  useEffect(() => {
    setPassword();
  }, []);

  const savePassword = useMutation(editPassword, password, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myinfo']);
      navigate('/');
    },
  });
  console.log('savePassword', savePassword);

  const onSavePassword = () => {
    savePassword.mutate(password);
  };

  const onChangePassword = (e) => {
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    if (passwordCurrent.length < 8) {
      setPasswordMessage('비밀번호를 8자 이상 입력해주세요');
      setIsPassword(false);
    } else {
      setPasswordMessage('사용 가능한 비밀번호 입니다.');
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);
    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage('비밀번호가 일치합니다.');
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage(
        '비밀번호가 일치하지 않습니다. 다시 입력해주시기 바람니다.'
      );
      setIsPasswordConfirm(false);
    }
  };

  return (
    <div className={styles.container}>
      <form>
        <h1>비밀번호 변경</h1>
        <input
          type="password"
          name="old_password"
          placeholder="현재 비밀번호"
        />
        <input
          type="password"
          name="new_password"
          value={password}
          onChange={onChangePassword}
          placeholder="새 비밀번호"
        />
        {password && <p className={styles.errorMessage}>{passwordMessage}</p>}
        <input
          type="password"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
          placeholder="새 비밀번호 확인"
        />
        {passwordConfirm && (
          <p className={styles.errorMessage}>{passwordConfirmMessage}</p>
        )}

        <button type="submit" onClick={onSavePassword}>
          변경 완료
        </button>
      </form>
    </div>
  );
}
