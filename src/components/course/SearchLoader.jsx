import React from 'react';

import styles from './SearchLoader.module.scss';

export default function Search() {
   return (
      <>
         <div className={styles.container}>
            <form className={styles.form}>
               <input type='text' className={styles.input} />
               <button type='button' className={styles.search}>
                  검색
               </button>
               <button className={styles.reset} type='button'>
                  초기화
               </button>
            </form>
         </div>
      </>
   );
}
