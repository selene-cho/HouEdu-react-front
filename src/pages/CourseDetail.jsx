import React from 'react';
import styles from './CourseDetail.module.scss';
import DetailBanner from '../components/course/Details/Banner/DetailBanner';
import DetailInfo from '../components/course/Details/Info/DetailInfo';
import DetailCurriculum from '../components/course/Details/Curriculum/DetailCurriculum';
import Result from '../components/course/Details/Result_Review/Result_Review';

export default function CourseDetail() {
   return (
      <div className={styles.container} id='top'>
         <DetailBanner />
         <DetailInfo />
         <DetailCurriculum />
         <Result />
      </div>
   );
}
