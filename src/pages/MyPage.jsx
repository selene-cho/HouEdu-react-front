import React from 'react';
import { Outlet } from 'react-router-dom';
import CategoryNavbar from '../components/layout/CategoryNavbar';
import ProtectedPage from '../components/layout/ProtectedPage';
import styles from './MyPage.module.scss';

export default function MyPage() {
  return (
    <ProtectedPage>
      <section className={styles.container}>
        <CategoryNavbar />
        <div className={styles.body}>
          <Outlet />
        </div>
      </section>
    </ProtectedPage>
  );
}
