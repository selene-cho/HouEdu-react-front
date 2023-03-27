import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { getMyInfo } from '../api/api';
import styles from './EditProfile.module.scss';

export default function EditProfile() {
  const { data } = useQuery(['getMyInfo'], getMyInfo);

  const [userInfo, setUserInfo] = useState({
    username: '',
    nickname: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    setUserInfo(data);
  }, [data]);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch('http://127.0.0.1:8000/api/v1/users/myinfo', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userInfo),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원 정보 수정</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          아이디 :
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          닉네임 :
          <input
            type="text"
            name="nickname"
            value={userInfo.nickname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          이메일 :
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          비밀번호 :
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
