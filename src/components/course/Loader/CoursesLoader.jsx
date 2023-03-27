import React, { useContext } from 'react';
import styles from './CoursesLoader.module.scss';

export default function Courses() {
   return (
      <div className={styles.container}>
         <div className={styles.courses}>
            <img className={styles.crs__image} />
            <p></p>
            <p></p>
            <p></p>
         </div>
      </div>
   );
}
