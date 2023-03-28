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
