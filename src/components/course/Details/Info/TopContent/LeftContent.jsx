import React from 'react';
import { useCourse } from '../../../../hooks/useCourse';
import styles from './TopContent.module.scss';

export default function LeftContent() {
   const data = useCourse();
   return (
      <div className={styles.left_content}>
         <div>
            <p>인테리어 장인이 준비한</p>
            <p>
               <strong>{data.data?.category?.name}</strong>강의입니다.
            </p>
            <p>장인의 팁이 담겨있어요</p>
         </div>
      </div>
   );
}
