import axios from 'axios';
// import Cookies from 'js-cookie';
import Cookie from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  // headers: {
  //   'X-CSRFToken': Cookies.get('csrftoken'),
  // },
  withCredentials: true,
});

export const getReviews = () => instance.get('reviews').then((res) => res.data);

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
