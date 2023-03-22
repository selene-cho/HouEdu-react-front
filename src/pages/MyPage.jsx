import React from 'react';
import { Outlet } from 'react-router-dom';
import CategoryNavigation from '../components/layout/CategoryNavbar';
import styles from './MyPage.module.scss';

export default function MyPage() {
  return (
    <section className={styles.container}>
      <CategoryNavigation />
      <div className={styles.body}>
        <Outlet />
      </div>
    </section>
  );
}
