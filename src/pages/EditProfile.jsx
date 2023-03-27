import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyInfo, editNickName } from '../api/api';
import styles from './EditProfile.module.scss';

const INITIAL_VALUES = {
  username: '',
  nickname: '',
  email: '',
};

export default function EditProfile() {
  const { data } = useQuery(['myinfo'], getMyInfo, { staleTime: 2000 });
  console.log('data', data);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(INITIAL_VALUES);
  console.log('userInfo', userInfo);

  useEffect(() => {
    if (data) {
      setUserInfo(data);
    }
  }, [data]);

  const handleChange = (name, value) => {
    setUserInfo((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const saveNickname = useMutation(editNickName, userInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myinfo']);
      navigate('users/myinfo/');
    },
  });
  console.log('saveNickname', saveNickname);

  const onSaveNickname = () => {
    saveNickname.mutate(userInfo);
  };

  // const handleInputChange = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;

  //   setUserInfo({
  //     ...userInfo,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await editNickName(id);
  //   if(!result) return;
  //   setUserInfo((prevItems)=>...prevItems,)
  // }

  // fetch('http://127.0.0.1:8000/api/v1/users/myinfo/', {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(userInfo),
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error(error));
  // };

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
            onChange={handleChange}
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
