import React from 'react';
import Portfolios from '../components/course/Portfolios';
import Search from '../components/course/Search';
import styles from './CourseList.module.scss';

export default function CourseList() {
   return (
      <div className={styles.container}>
         <Portfolios />
         <Search />
      </div>
   );
}
