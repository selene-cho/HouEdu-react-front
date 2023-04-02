import { createBrowserRouter } from 'react-router-dom';
// import { useReactiveVar } from '@apollo/client';
// import { isLoggedInVar } from './apollo';

import App from './App';
import Home from './pages/Main/Home';
import CourseList from './pages/CourseList';
import ReviewList from './pages/Review/ReviewList';
import Portfolio from './pages/Portfolio';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import Login from './components/auth/Login';
import KakaoLogin from './components/auth/KakaoLogin';
import GithubLogin from './components/auth/GithubLogin';
import SignUp from './components/auth/SignUp';
import CourseDetail from './pages/CourseDetail';
import ReviewForm from './pages/Review/ReviewForm';
import MyReview from './pages/Review/MyReview';
import MyPage from './pages/MyPage';
import ReviewNotFound from './pages/Review/ReviewNotFound';
import EditProfile from './pages/EditProfile';
import EditPassword from './pages/EditPassword';
import MyPageMain from './pages/MyPageMain';
import GoogleLogin from './components/auth/GoogleLogin';

// const isLoggedIn = useReactiveVar(isLoggedInVar);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, // 사용자 지정 Error Page
    children: [
      { index: true, path: '', element: <Home /> },
      { path: 'course', element: <CourseList /> },
      { path: 'course/courses/:courseId', element: <CourseDetail /> },
      { path: 'reviews', element: <ReviewList /> },
      { path: 'review/form', element: <ReviewForm /> },
      { path: 'portfolio', element: <Portfolio /> },
      {
        path: 'mypage',
        element: <MyPage />,
        children: [
          { index: true, path: '', element: <MyPageMain /> },
          { path: 'edit/profile', element: <EditProfile /> },
          { path: 'edit/password', element: <EditPassword /> },
          { path: 'review', element: <MyReview /> },
          { path: 'review/notfound', element: <ReviewNotFound /> },
        ],
      },
      { path: 'carts', element: <MyCart /> },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/social',
    children: [
      {
        path: 'github',
        element: <GithubLogin />,
      },
      {
        path: 'kakao',
        element: <KakaoLogin />,
      },
      {
        path: 'google',
        element: <GoogleLogin />,
      },
    ],
  },
]);

export default router;
