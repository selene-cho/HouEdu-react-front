import React from 'react';
import Header from './Header/Header';
import TopContent from './TopContent/TopContent';
import BottomContent from './BottomContent/BottomContent';
import styles from './DetailInfo.module.scss';

export default function DetailInfo() {
   return (
      <section id='intro' className={styles.container}>
         <Header />
         <section className={styles.top_content}>
            <TopContent />
            <BottomContent />
         </section>
      </section>
   );
}
