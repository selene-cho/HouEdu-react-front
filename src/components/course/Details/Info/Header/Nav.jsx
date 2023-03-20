import React from 'react';
import styles from './Nav.module.scss';

export default function Nav() {
   return (
      <nav className={styles.nav}>
         <ul className={styles.nav_list}>
            <li>소개</li>
            <li>커리큘럼</li>
            <li>강의평</li>
         </ul>
      </nav>
   );
}
