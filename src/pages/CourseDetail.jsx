import React, { useEffect } from 'react';
import styles from './CourseDetail.module.scss';
import DetailBanner from '../components/course/Details/DetailBanner';
import DetailInfo from '../components/course/Details/DetailInfo';
import DetailCurriculum from '../components/course/Details/DetailCurriculum';

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
