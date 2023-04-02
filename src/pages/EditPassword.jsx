import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editPassword } from '../api/api';
import styles from './EditPassword.module.scss';
import { useNavigate } from 'react-router-dom';

const INITIAL_VALUES = {
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

export default function ChangePassword() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [passwords, setPasswords] = useState(INITIAL_VALUES);
  const [error, setError] = useState(null);

  const changePasswordMutation = useMutation(editPassword, {
    onSuccess: () => {
      setPasswords(INITIAL_VALUES);
      setError(null);
      alert('비밀번호가 변경 되었습니다. 다시 로그인해주세요.');
      queryClient.invalidateQueries(['myinfo']);
      navigate('/');
    },
    onError: () => {
      setError('비밀번호를 잘못 입력하셨습니다.');
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmNewPassword) {
      setError(
        '새 비밀번호와 확인 비밀번호가 서로 일치하는지 다시 한번 확인해주세요.'
      );
      return;
    }
    changePasswordMutation.mutate({
      old_password: passwords.oldPassword,
      new_password: passwords.newPassword,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>비밀번호 변경</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <div>
          <input
            type="password"
            name="oldPassword"
            value={passwords.oldPassword}
            placeholder="현재 비밀번호"
            onChange={(e) =>
              setPasswords({ ...passwords, oldPassword: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            name="oldPassword"
            value={passwords.newPassword}
            placeholder="새 비밀번호"
            onChange={(e) =>
              setPasswords({ ...passwords, newPassword: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            name="confirm-password"
            value={passwords.confirmNewPassword}
            placeholder="비밀번호 확인"
            onChange={(e) =>
              setPasswords({ ...passwords, confirmNewPassword: e.target.value })
            }
          />
        </div>
        <button type="submit">변경 완료</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
