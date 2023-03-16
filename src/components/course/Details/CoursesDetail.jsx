import React from 'react';
import styles from './CoursesDetail.module.scss';

export default function CoursesDetail() {
   return (
      <main className={styles.container}>
         {/* 배너 */}
         <div className={styles.banner}></div>
         {/* 인포 */}
         <section className={styles.section}>
            <div className={styles.info}></div>
            <div className={styles.intro}></div>
         </section>
      </main>
   );
}
