import axios from 'axios';
import Cookies from 'js-cookie';
import Cookie from 'js-cookie';

const instance = axios.create({
   //baseURL: "http://3.38.150.223/api/v1/",
   baseURL: 'http://127.0.0.1:8000/api/v1/',
   headers: {
      'X-CSRFToken': Cookies.get('csrftoken') || '',
   },
   withCredentials: true,
});

/* 전체 Reviews - GET */
export const getReviews = () => instance.get('reviews/').then(res => res.data);

/* MyReviews - GET */
export const getMyReviews = () => instance.get('users/myinfo/myreviews/').then(res => res.data);

/* Review 작성 - POST */
export const postReviews = ({ crs, star, content }) => {
   return instance
      .post(
         'users/myinfo/myreviews/',
         { crs, star, content },
         {
            headers: {
               'X-CSRFToken': Cookie.get('csrftoken') || '',
            },
         },
      )
      .then(res => res.data);
};
/* Review 삭제 - DELETE */
export const deleteReviews = id => instance.delete(`users/myinfo/myreviews/${id}`).then(res => res.data);

// export const deleteReviews = (id) =>
//   instance
//     .delete(
//       `users/myinfo/myreviews/${id}`
//       { id },
//       {
//         headers: {
//           'X-CSRFToken': Cookie.get('csrftoken') || '',
//         },
//       }
//     )
//     .then((res) => res.data);

/* 회원 기본정보 - GET */
export const getMyInfo = () => instance.get('users/myinfo/').then(res => res.data);

/* 일반 로그인 - POST */
export const usernameLogIn = ({ username, password }) =>
   instance
      .post(
         'users/login/',
         { username, password },
         {
            headers: {
               'X-CSRFToken': Cookie.get('csrftoken') || '',
            },
         },
      )
      .then(res => res.data);

/* 로그아웃 - POST */
export const logOut = () =>
   instance
      .post('users/logout/', null, {
         headers: {
            'X-CSRFToken': Cookie.get('csrftoken') || '',
         },
      })
      .then(res => res.data);

/* Github 로그인 - POST */
export const githubLogIn = code =>
   instance
      .post(
         'users/github/', // django의 users/github으로 코드 확인 요청
         { code },
         {
            headers: {
               'X-CSRFToken': Cookie.get('csrftoken') || '',
            },
         },
      )
      .then(res => res.status);

/* Kakao 로그인 - POST */
export const kakaoLogIn = code =>
   instance
      .post(
         'users/kakao/',
         { code },
         {
            headers: {
               'X-CSRFToken': Cookie.get('csrftoken') || '',
            },
         },
      )
      .then(res => res.status);

/* 닉네임 수정 - PUT */
export const editNickName = ({ nickname }) =>
   instance
      .put(
         'users/myinfo/',
         { nickname },
         {
            headers: {
               'X-CSRFToken': Cookie.get('csrftoken') || '',
               'Content-Type': 'application/json',
            },
         },
      )
      .then(res => res.data);

/* 비밀번호 변경 - PUT */
export const editPassword = ({ old_password, new_password }) =>
   instance.put(
      `users/password/`,
      { old_password, new_password },
      {
         headers: {
            'X-CSRFToken': Cookie.get('csrftoken') || '',
            'Content-Type': 'application/json',
         },
      },
   );

/* 회원가입 - POST */
export const signUp = ({ username, password, email, nickname }) =>
   instance
      .post(
         'users/signup/',
         { username, password, email, nickname },
         {
            headers: {
               'X-CSRFToken': Cookie.get('csrftoken') || '',
            },
         },
      )
      .then(res => res.data);

/* 창섭님 추가 API */

// get
export const getCourses = () => instance.get('courses/').then(res => res.data);

export const getCourse = ({ queryKey }) => {
   const [, courseId] = queryKey;
   return instance.get(`courses/${courseId}`).then(res => res.data);
};

// post
// export const postCourses = () =>
//   instance.post('courses/').then((res) => res.data);

// export const postCourse = async ({ queryKey }) => {
//   const [, courseId] = queryKey || [];
//   try {
//     const response = await instance.post(`courses/${courseId}`);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
export const createCourse = async courseData => {
   try {
      const response = await instance.post(`courses/${courseData}/`);
      return response.data;
   } catch (error) {
      console.error(error);
      throw new Error('서버에서 요청을 처리하는 동안 문제가 발생했습니다.');
   }
};
