import React from 'react';
import { useCourse } from '../../../../hooks/useCourse';
import styles from './BottomContent.module.scss';

export default function BottomCOntent() {
   const data = useCourse();

   return (
      <div className={styles.bottom_content}>
         <div className={styles.title}>{data?.crs_info}</div>
         <div className={styles.content_list}>
            <p>이런 걸 배워요. 💁🏻‍♀️</p>
            <div>
               <ul className={styles.content_item}>
                  <li>&nbsp; {data?.crs_content}</li>
                  <li>&nbsp; {data?.crs_content}</li>
                  <li>&nbsp; {data?.crs_content}</li>
               </ul>
            </div>
         </div>
      </div>
   );
}
