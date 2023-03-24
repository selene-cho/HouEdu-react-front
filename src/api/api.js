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

export const getReviews = () => instance.get(`reviews`).then((res) => res.data);

// export const getReview = (order = 'created_at') => {
//   const query = `order=${order}`;
//   return instance.get(`reviews?${query}`).then((res) => res.data);
// };

export const getMyReviews = () =>
  instance.get(`users/myinfo/myreviews/`).then((res) => res.data);

// export const postReviews = ({ data }) => {
//   const formData = new formData();
//   formData.append('crs', crs);
//   formData.append('star', star);
//   formData.append('content', content);

//   return instance
//     .post(
//       `users/myinfo/myreviews/`,
//       { data },
//       {
//         headers: {
//           'X-CSRFToken': Cookie.get('csrftoken') || '',
//         },
//       }
//     )
//     .then((res) => res.data);
// };

// export const deleteReviews = () =>
//   instance.delete(`users/myinfo/myreviews/`).then((res) => res.data);

export const getMyInfo = () =>
  instance.get(`users/myinfo/`).then((res) => res.data);

/* 로그인, 로그아웃 API */

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

// const courseData = axios.create({
//   baseURL: 'http://127.0.0.1:8000/api/v1/courses/',
// });

// export const fetchCourse = async () => {
//   const response = await courseData.get();
//   console.log(response);
//   return response.data;
// };

export const getCourses = () =>
  instance.get(`courses/`).then((res) => res.data);

// export const getCourse = ({ queryKey }) => {
//   const [, courseId] = queryKey;
//   return instance.get(`courses/${courseId}`).then((res) => res.data);
// };

export const getCourse = ({ queryKey }) => {
  const [, courseId] = queryKey;
  return instance.get(`courses/${courseId}`).then((res) => res.data);
};
