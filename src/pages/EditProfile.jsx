import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyInfo, editNickName } from '../api/api';
import useUser from '../components/hooks/useUser';
import styles from './EditProfile.module.scss';

const INITIAL_VALUES = {
  username: '',
  nickname: '',
  email: '',
};

export default function EditProfile() {
  const { data } = useQuery(['myinfo'], getMyInfo, {
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60,
  });

  // const { user } = useUser();
  // console.log('user', user);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(INITIAL_VALUES);
  // console.log('userInfo', userInfo);

  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }
  }, [data]);

  const saveNickname = useMutation(editNickName, userInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myinfo']);
      navigate('/');
    },
  });
  // console.log('saveNickname', saveNickname);

  const onSaveNickname = () => {
    saveNickname.mutate(userInfo);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원정보 수정</h1>
      <form className={styles.form}>
        <label>
          아이디 :
          <input type="text" name="username" value={data.username} disabled />
        </label>
        <label>
          닉네임 :
          <input
            type="text"
            name="nickname"
            value={userInfo.nickname}
            onChange={(e) => {
              setUserInfo((currentNickname) => {
                return {
                  ...currentNickname,
                  nickname: e.target.value,
                };
              });
            }}
          />
        </label>
        <label>
          이메일 :
          <input type="email" name="email" value={data.email} disabled />
        </label>
        <button type="submit" onClick={onSaveNickname}>
          수정
        </button>
      </form>
    </div>
  );
}
