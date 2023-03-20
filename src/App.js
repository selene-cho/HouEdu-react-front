import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import styles from './scss/App.module.scss';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App() {
  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <Outlet />
      </div>
      <Footer />
      <ReactQueryDevtools />
    </>
  );
}

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './pages/Home';
// import CourseList from './pages/CourseList';
// import Lectures from './pages/Lectures';
// import NewLecture from './pages/NewLecture';
// import Review from './pages/Review';
// import Portfolio from './pages/Portfolio';
// import MyCart from './pages/MyCart';
// import NotFound from './pages/NotFound';
// import Login from './components/auth/Login';
// import KakaoLogin from './components/auth/KakaoLogin';
// import SignUp from './components/auth/SignUp';
// import Layout from './components/layout/Layout';

// <Router>
// <Routes>
//   <Route
//     path="/"
//     element={
//       <Layout>
//         <App />
//       </Layout>
//     }
//   >
//     <Route index element={<Home />} />
//     <Route path="/courses">
//       <Route index element={<CourseList />} />
//       <Route path=":couresId" element={<Lectures />} />
//     </Route>
//     <Route path="/reviews" element={<Review />} />
//     <Route path="portfolio" element={<Portfolio />} />
//     <Route path="carts" element={<MyCart />} />
//   </Route>
//   <Route path="/signup" element={<SignUp />} />
//   <Route path="/login" element={<Login />} />
//   <Route path="/kakaologin" element={<KakaoLogin />} />
//   <Route path="*" element={<NotFound />} />
// </Routes>
// </Router>
