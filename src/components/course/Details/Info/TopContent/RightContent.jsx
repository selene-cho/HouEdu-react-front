import React from 'react';
import styles from './TopContent.module.scss';

export default function RightContent() {
   return (
      <div className={styles.right_content}>
         <div className={styles.right}>
            <div className={styles.right_img}>
               <img src='../image/Coursethumbnail-1.png' />
            </div>
            <div className={styles.right_info}>
               <p>이름</p>
               <p>강사소개</p>
            </div>
         </div>
         <RightBottom />
      </div>
   );
}

function RightBottom() {
   return (
      <div className={styles.right_bottom}>
         <ul>
            <span>강사 이력</span>
            <li>현| 삼성</li>
            <li>전| 현대</li>
            <li>전| 스타트업</li>
         </ul>
      </div>
   );
}
