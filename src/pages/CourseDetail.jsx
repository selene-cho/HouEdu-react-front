import React, { useEffect } from 'react';
import styles from './CourseDetail.module.scss';
import CoursesDetail from '../components/course/Details/CoursesDetail';

export default function CourseDetail() {
   return (
      <>
         <section className={styles.container}>
            <CoursesDetail />
            <aside>
               <div>price box</div>
            </aside>
            <main>
               <div>info</div>
               <div>videoPlayer</div>
               <div>review</div>
            </main>
         </section>
      </>
   );
}
