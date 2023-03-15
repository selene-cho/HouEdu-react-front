import React, { useEffect } from 'react';
import styles from './CourseDetail.module.scss';
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
   const params = useParams();
   console.log(params);
   useEffect(() => {
      console.log('detail', params.coursesId);
   }, [params]);

   return (
      <>
         <section className={styles.container}>
            {/* <header>
               <img src='/image/Coursethumbnail-1.png' />
            </header>
            <aside>
               <div>price box</div>
            </aside>
            <main>
               <div>info</div>
               <div>videoPlayer</div>
               <div>review</div>
            </main> */}
         </section>
      </>
   );
}
