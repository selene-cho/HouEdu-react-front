import React from 'react';
import styles from './DetailCurriculum.module.scss';

export default function TabMenuHeader({ tabs, activeTab, onTabClick }) {
   console.log(tabs);
   return (
      <>
         <ul className={styles.ul}>
            {tabs.map((tab, index) => (
               <li key={index} className={`${index === activeTab ? `${styles.li} ${styles.active}` : styles.li}`} onClick={() => onTabClick(index)}>
                  {tab.title}
               </li>
            ))}
         </ul>
      </>
   );
}
