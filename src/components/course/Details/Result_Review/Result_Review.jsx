import React from 'react';
import { useCourse } from '../../../hooks/useCourse';
import styles from './Result_Review.module.scss';

export default function Result() {
   const data = useCourse();
   return (
      <section id='review' className={styles.container}>
         <div className={styles.title}>
            <span>이 강의를 들은 수강생의 후기</span>
         </div>

         <div className={styles.review}>
            {data.data?.reviews.map(item => (
               <div className={styles.reviews} key={item.id}>
                  <div className={styles.review__info}>
                     <span>{item.user.nickname}</span>
                     <span>{item.updated_at}</span>
                     <p>{item.content}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
