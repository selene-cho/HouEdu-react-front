import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.scss';
import dummy from '../../../dummy/portfolio.json';

const slides = dummy.items;

// 전체목록에서 슬라이드로 보여지는 컴포넌트
export default function Portfolios() {
   return (
      <section className={styles.container}>
         {slides.map((slide, index) => (
            <div className={styles.main} key={index}>
               <Link to='/portfolio'>
                  <img className={styles.images} src={slide.url} alt={`Slide ${index}`} />
                  <div className={styles.items}>
                     <h3 className={styles.title}>{slide.name}</h3>
                     <p className={styles.date}>{slide.date}</p>
                  </div>
               </Link>
            </div>
         ))}
      </section>
   );
}
