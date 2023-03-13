import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.scss';
import dummy from '../../dummy/portfolio.json';

const slides = [...dummy.items, dummy.items[0]];

export default function Portfolios() {
   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentSlideIndex(index => index === (index + 1) % slides.length);
      }, 5000);
      return () => clearInterval(intervalId);
   }, []);

   return (
      <section className={styles.container}>
         {slides.map((slide, index) => (
            <div
               className={styles.main}
               key={index}
               style={{
                  transform: `translate3d:(${currentSlideIndex === index ? '0' : '-20rem'}, 0, 0)`,
               }}
            >
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
