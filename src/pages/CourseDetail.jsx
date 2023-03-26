import React from 'react';
import styles from './CourseDetail.module.scss';
import DetailBanner from '../components/course/Details/Banner/DetailBanner';
import DetailInfo from '../components/course/Details/Info/DetailInfo';
import DetailCurriculum from '../components/course/Details/Curriculum/DetailCurriculum';
import Result from '../components/course/Details/Result_Review/Result_Review';
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
   const { coursesId } = useParams();
   console.log('디테일id', coursesId);

   return (
      <div className={styles.container}>
         <DetailBanner />
         <DetailInfo />
         <DetailCurriculum />
         <Result />
      </div>
   );
}
