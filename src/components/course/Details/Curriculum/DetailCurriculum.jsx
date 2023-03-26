import React from 'react';
import { useCourse } from '../../../hooks/useCourse';
import styles from './DetailCurriculum.module.scss';

export default function DetailCurriculum() {
   const data = useCourse();

   return (
      <section id='curriculum' className={styles.curriculum}>
         <div className={styles.tab_menu}>
            <div className={styles.title}>커리큘럼</div>
            <ul className={styles.ul}>
               {data?.lectures.map(items => (
                  <li className={styles.li} key={items.id}>
                     {console.log('data?', items.lctr_name)}
                     {items.lctr_name}
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
}
