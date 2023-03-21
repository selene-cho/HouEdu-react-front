import React, { useState } from 'react';
import styles from './Nav.module.scss';
import { Link } from 'react-scroll';

export default function Nav() {
   return (
      <nav className={styles.nav}>
         <ul className={styles.nav_list}>
            <li>
               <Link to='intro' spy={true} smooth={true} offset={-70} duration={500}>
                  소개
               </Link>
            </li>
            <li>
               <Link to='curriculum' spy={true} smooth={true} offset={-120} duration={500}>
                  커리큘럼
               </Link>
            </li>
            <li>
               <Link to='review' spy={true} smooth={true} offset={-120} duration={500}>
                  강의평
               </Link>
            </li>
         </ul>
      </nav>
   );
}
