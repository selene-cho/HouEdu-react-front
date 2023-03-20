import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import styles from './TopContent.module.scss';

export default function TopContent() {
   return (
      <div className={styles.top_content}>
         <div className={styles.intro}>
            <h2>강사님과 강의를 소개합니다.</h2>
         </div>
         <div className={styles.content}>
            <LeftContent />
            <RightContent />
         </div>
      </div>
   );
}
