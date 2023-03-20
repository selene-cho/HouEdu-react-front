import React, { useEffect } from 'react';
import styles from './CourseDetail.module.scss';
import DetailBanner from '../components/course/Details/Banner/DetailBanner';
import DetailInfo from '../components/course/Details/Info/DetailInfo';
import DetailCurriculum from '../components/course/Details/Curriculum/DetailCurriculum';

export default function CourseDetail() {
   return (
      <>
         <div className={styles.container}>
            <DetailBanner />
            <DetailInfo />
            <DetailCurriculum />
         </div>
      </>
   );
}
