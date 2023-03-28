import React from 'react';
import { useCourse } from '../../../../hooks/useCourse';
import styles from './TopContent.module.scss';

export default function RightContent() {
   const data = useCourse();

   return (
      <div className={styles.right_content}>
         <div className={styles.right}>
            <div className={styles.right_img}>
               <img src={data.data?.tcr.tcr_img} />
            </div>
            <div className={styles.right_info}>
               <p>{data.data?.tcr.tcr_name}</p>
               <p>{data.data?.tcr.tcr_info}</p>
            </div>
         </div>
         <RightBottom data={data} />
      </div>
   );
}

function RightBottom({ data }) {
   return (
      <div className={styles.right_bottom}>
         <ul>
            <span>강사 이력</span>
            <li>현| {data.tcr?.tcr_career}</li>
            <li>전| {data.tcr?.tcr_career}</li>
            <li>전| {data.tcr?.tcr_career}</li>
         </ul>
      </div>
   );
}
