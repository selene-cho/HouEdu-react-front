import React, { useState } from 'react';
import styles from './Courses.module.scss';
import { Link } from 'react-router-dom';
import data from '../../dummy/data.json';

export default function Courses() {
   console.log(data.map(data => data.reviews.map(data => data.star)));
   const [showCount, setShowCount] = useState(4);

   const handleShowMore = () => {
      setShowCount(showCount + 4);
   };

   return (
      <div className={styles.container}>
         {data.slice(0, showCount).map(courses => (
            <Link to={`/courses/${courses.id}`} key={courses.id}>
               <div className={styles.courses}>
                  <img className={styles.crs__image} src={courses.thumbnail} alt={`courses ${courses.id}`} />
                  <span>{courses.reviews.star}</span>
                  <p>{courses.tcr.tcr_name}</p>
                  <p>{courses.crs_name}</p>
                  <p>{courses.prcie}</p>
               </div>
            </Link>
         ))}
         {showCount < data.length && (
            <div className={styles.show__more} onClick={handleShowMore}>
               더 보기
            </div>
         )}
      </div>
   );
}
