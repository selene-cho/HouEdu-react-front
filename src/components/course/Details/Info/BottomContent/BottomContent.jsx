import React from 'react';
import styles from './BottomContent.module.scss';

export default function BottomCOntent() {
   return (
      <div className={styles.bottom_content}>
         <div className={styles.title}>인테리어, 디자인을 배워볼까요?</div>
         <div className={styles.content_list}>
            <p>이런 걸 배워요. 💁🏻‍♀️</p>
            <div>
               <ul className={styles.content_item}>
                  <li>&nbsp; 인테리어</li>
                  <li>&nbsp; 실내 디자인</li>
                  <li>&nbsp; 현장 작업</li>
               </ul>
            </div>
         </div>
      </div>
   );
}
