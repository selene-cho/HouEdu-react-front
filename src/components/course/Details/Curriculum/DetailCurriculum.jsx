import React from 'react';
import styles from './DetailCurriculum.module.scss';
import dummy from './tabs.json';

export default function DetailCurriculum() {
   console.log(dummy.map(item => console.log(item.title)));
   return (
      <section id='curriculum' className={styles.curriculum}>
         <div className={styles.tab_menu}>
            <div className={styles.title}>커리큘럼</div>
            <ul className={styles.ul}>
               {dummy.map(items => (
                  <li className={styles.li}>{items.title}</li>
               ))}
            </ul>
         </div>
      </section>
   );
}
