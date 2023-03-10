import React from 'react';
import Portfolios from '../components/course/Portfolios';
import SearchCourse from '../components/course/SearchCourse';
import styles from './CourseList.module.scss';

export default function CourseList() {
   return (
      <div className={styles.container}>
         <Portfolios />
         <SearchCourse />
      </div>
   );
}
