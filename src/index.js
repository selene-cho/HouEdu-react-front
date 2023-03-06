import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Lectures from './pages/Lectures';
import NewLecture from './pages/NewLecture';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />, // 사용자 지정 Error Page
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/courses', element: <Courses /> },
      { path: '/courses/new', element: <NewLecture /> },
      { path: '/course/:courseId', element: <Lectures /> },
      { path: '/carts', element: <MyCart /> },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
