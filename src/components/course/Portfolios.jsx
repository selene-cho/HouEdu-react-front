import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.scss';
import dummy from '../../dummy/portfolio.json';

export default function Portfolios() {
   return (
      <section className={styles.container}>
         {dummy.items.map(item => (
            <div key={item.id} className={styles.main}>
               <Link to='/portfolio'>
                  <img className={styles.item} src={item.url} alt={item.name} />
               </Link>
               <div className={styles.items}>
                  <h3 className={styles.title}>{item.name}</h3>
                  <p className={styles.date}>{item.date}</p>
               </div>
            </div>
         ))}
      </section>
   );
}
