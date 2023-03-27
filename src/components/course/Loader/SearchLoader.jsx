import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SearchLoader.module.scss';

export default function Search() {
   return (
      <div className={styles.container}>
         <div className={styles.filterButtons}>
            <button type='button'></button>
            <button type='button'></button>
            <button type='button'></button>
            <button type='button'></button>
         </div>

         <div className={styles.course}>
            <div className={styles.courses}>
               <Link to=''>
                  <img className={styles.crs__image} />
               </Link>
               <div>
                  <span></span>
                  <p></p>
                  <p></p>
                  <p></p>
               </div>
            </div>
            <div className={styles.courses}>
               <Link to=''>
                  <img className={styles.crs__image} />
               </Link>
               <div>
                  <span></span>
                  <p></p>
                  <p></p>
                  <p></p>
               </div>
            </div>
            <div className={styles.courses}>
               <Link to=''>
                  <img className={styles.crs__image} />
               </Link>
               <div>
                  <span></span>
                  <p></p>
                  <p></p>
                  <p></p>
               </div>
            </div>
            <div className={styles.courses}>
               <Link to=''>
                  <img className={styles.crs__image} />
               </Link>
               <div>
                  <span></span>
                  <p></p>
                  <p></p>
                  <p></p>
               </div>
            </div>
         </div>
      </div>
   );
}
