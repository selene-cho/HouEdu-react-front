import React from 'react';
import Nav from './Nav';
import styles from './Header.module.scss';

export default function Header() {
   return (
      <header className={styles.header}>
         <Nav />
      </header>
   );
}
