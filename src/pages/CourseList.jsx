import React, { useState, useEffect } from 'react';
import PortfolioSlid from '../components/course/Portfolio/PortfolioSild';
import styles from './CourseList.module.scss';
import PortfoliosLoader from '../components/course/Loader/PortfolioLoader';
import SearchLoader from '../components/course/Loader/SearchLoader';
import Courses from '../components/course/Courses/Courses';

export default function CourseList() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setLoading(false);
      }, 1000);

      return () => clearInterval(timer);
   }, []);

   return (
      <div className={styles.container}>
         {loading ? (
            <>
               <PortfoliosLoader />,
               <SearchLoader />
            </>
         ) : (
            <>
               <PortfolioSlid />
               <Courses />
            </>
         )}
      </div>
   );
}
