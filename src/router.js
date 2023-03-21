import { createBrowserRouter } from 'react-router-dom';
// import { useReactiveVar } from '@apollo/client';
// import { isLoggedInVar } from './apollo';

import App from './App';
import Home from './pages/Main/Home';
import CourseList from './pages/CourseList';
import Reviews from './pages/Review/Reviews';
import Portfolio from './pages/Portfolio';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import Login from './components/auth/Login';
import KakaoLogin from './components/auth/KakaoLogin';
import GithubLogin from './components/auth/GithubLogin';
import SignUp from './components/auth/SignUp';
import CourseDetail from './pages/CourseDetail';
import ReviewForm from './pages/Review/ReviewForm';
import UploadReview from './pages/Review/UploadReview';

// const isLoggedIn = useReactiveVar(isLoggedInVar);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, // 사용자 지정 Error Page
    children: [
      { index: true, path: '', element: <Home /> },
      { path: 'courses', element: <CourseList /> },
      { path: 'course/:coursesId', element: <CourseDetail /> },
      { path: 'reviews', element: <Reviews /> },
      { path: 'review/form', element: <ReviewForm /> },
      { path: 'review/upload', element: <UploadReview /> },
      { path: 'portfolio', element: <Portfolio /> },
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
    ],
  },
]);

export default router;
