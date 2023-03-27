import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EditPassword.module.scss';
import { editPassword } from '../api/api';

export default function EditPassword() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [password, setPassword] = useState();

  useEffect(() => {
    setPassword();
  }, []);

  const savePassword = useMutation(editPassword, password, {
    onSuccess: () => {
      queryClient.refetchQueries(['myinfo']);
      navigate('/');
    },
  });
  console.log('savePassword', savePassword);

  const onSavePassword = () => {
    savePassword.mutate(password);
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
        <input type="password" name="new_password" placeholder="새 비밀번호" />
        <input type="password" placeholder="새 비밀번호 확인" />
        <button type="submit" onClick={onSavePassword}>
          변경 완료
        </button>
      </form>
    </div>
  );
}
