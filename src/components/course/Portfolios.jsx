import React, { useState, useEffect } from 'react';
import styles from './Portfolio.module.scss';
import dummy from '../../dummy/portfolio.json';

export default function Portfolios() {
   console.log(dummy);
   const [pofol, setPofol] = useState([]);

   return (
      <div className={styles.container}>
         <div className={styles.main}>
            <h1 className={styles.title}>수강생의 작품</h1>
            <div className={styles.items}>
               <div className={styles.item}>
                  <img />
                  <p>title</p>
                  <p>info</p>
               </div>
            </div>
         </div>
      </div>
   );
}
