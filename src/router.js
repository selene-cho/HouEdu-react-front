import { createBrowserRouter } from 'react-router-dom';
// import { useReactiveVar } from '@apollo/client';
// import { isLoggedInVar } from './apollo';

import App from './App';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import Reviews from './pages/Reviews';
import Portfolio from './pages/Portfolio';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import Login from './components/auth/Login';
import KakaoLogin from './components/auth/KakaoLogin';
import SignUp from './components/auth/SignUp';
import CourseDetail from './pages/CourseDetail';

// const isLoggedIn = useReactiveVar(isLoggedInVar);

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <NotFound />, // 사용자 지정 Error Page
      children: [
         { index: true, path: '/', element: <Home /> },
         { path: '/course', element: <CourseList /> },
         { path: '/courses/:coursesId', element: <CourseDetail /> },
         { path: '/reviews', element: <Reviews /> },
         { path: '/portfolio', element: <Portfolio /> },
         { path: '/carts', element: <MyCart /> },
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
      path: '/kakaologin',
      element: <KakaoLogin />,
   },
]);

export default router;
