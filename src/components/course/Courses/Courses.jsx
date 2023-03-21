import React, { useState, useEffect } from 'react';
import styles from './Courses.module.scss';
import { Link } from 'react-router-dom';
import data from '../../../dummy/data.json';

const lecture = data.lecture;

export default function Courses() {
   const [showCount, setShowCount] = useState(4);

   const handleShowMore = () => {
      setShowCount(showCount + 4);
   };

   return (
      <div className={styles.container}>
         {lecture.slice(0, showCount).map(courses => (
            <Link to={`/course/${courses.id}`} key={courses.id}>
               <div className={styles.courses}>
                  <img className={styles.crs__image} src={courses.thumbnail} alt={`courses ${courses.id}`} />
                  <p>{courses.tcr.tcr_name}</p>
                  <p>{courses.crs_name}</p>
                  <p>{courses.price}</p>
               </div>
            </Link>
         ))}
         {showCount < lecture.length && (
            <div className={styles.show__more} onClick={handleShowMore}>
               더 보기
            </div>
         )}
      </div>
   );
}
