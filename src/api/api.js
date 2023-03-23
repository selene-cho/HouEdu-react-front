import axios from 'axios';
// import Cookies from 'js-cookie';
import Cookie from 'js-cookie';

const instance = axios.create({
  //baseURL: "http://3.38.150.223/api/v1/",
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  // headers: {
  //   'X-CSRFToken': Cookies.get('csrftoken') || '',
  // },
  withCredentials: true,
});

export const getReviews = () => instance.get('reviews').then((res) => res.data);

export const getMyReviews = () =>
  instance.get(`users/myinfo/myreviews/`).then((res) => res.data);

export const getMyInfo = () =>
  instance.get(`users/myinfo/`).then((res) => res.data);

export const logOut = () =>
  instance
    .post(`users/logout/`, null, {
      headers: {
        'X-CSRFToken': Cookie.get('csrftoken') || '',
      },
    })
    .then((res) => res.data);

export const githubLogIn = (code) =>
  instance
    .post(
      `users/github/`, // django의 users/github으로 코드 확인 요청
      { code },
      {
        headers: {
          'X-CSRFToken': Cookie.get('csrftoken') || '',
        },
      }
    )
    .then((res) => res.status);

export const kakaoLogIn = (code) =>
  instance
    .post(
      `users/kakao/`,
      { code },
      {
        headers: {
          'X-CSRFToken': Cookie.get('csrftoken') || '',
        },
      }
    )
    .then((res) => res.status);

export const usernameLogIn = ({ username, password }) =>
  instance
    .post(
      `users/login/`,
      { username, password },
      {
        headers: {
          'X-CSRFToken': Cookie.get('csrftoken') || '',
        },
      }
    )
    .then((res) => res.data);

export const signUp = ({ username, password, email, nickname }) =>
  instance
    .post(
      `users/signup/`,
      { username, password, email, nickname },
      {
        headers: {
          'X-CSRFToken': Cookie.get('csrftoken') || '',
        },
      }
    )
    .then((res) => res.data);

/* 창섭님 추가 API */
