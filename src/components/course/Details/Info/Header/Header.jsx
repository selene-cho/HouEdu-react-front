import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import styles from './Header.module.scss';

export default function Header() {
   const [scrollPosition, setScrollPosition] = useState(0);
   const [isFixed, setIsFixed] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const position = window.pageYOffset;
         setScrollPosition(position);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   useEffect(() => {
      if (scrollPosition > 478) {
         setIsFixed(true);
      } else {
         setIsFixed(false);
      }
   }, [scrollPosition]);
   return (
      <header className={`${styles.header} ${isFixed ? styles.fixed : ''}`}>
         <Nav />
      </header>
   );
}
