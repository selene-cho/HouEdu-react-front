import React from 'react';
import styles from './PortfolioLoader.module.scss';
import dummy from '../../../dummy/portfolio.json';

const slides = [...dummy.items, dummy.items[0]];

export default function Portfolios() {
   return (
      <section className={styles.container}>
         {slides.map((slide, index) => (
            <div className={styles.main} key={index}>
               <img className={styles.images} />
               <div className={styles.items}>
                  <h3 className={styles.title}>{slide.name}</h3>
                  <p className={styles.date}>{slide.date}</p>
               </div>
            </div>
         ))}
      </section>
   );
}
