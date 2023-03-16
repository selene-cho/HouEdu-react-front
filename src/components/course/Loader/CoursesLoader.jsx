import React, { useContext } from 'react';
import styles from './CoursesLoader.module.scss';
import data from '../../../dummy/data.json';

const datas = data.lecture;

export default function Courses() {
   return (
      <div className={styles.container}>
         {datas.map(courses => (
            <div className={styles.courses} key={courses.id}>
               <img className={styles.crs__image} />
               <p>{courses.tcr.tcr_name}</p>
               <p>{courses.crs_name}</p>
               <p>{courses.prcie}</p>
            </div>
         ))}
      </div>
   );
}
