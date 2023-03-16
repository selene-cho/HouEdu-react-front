import React, { useState, useEffect } from 'react';
import PortfolioSlid from '../components/course/Portfolio/PortfolioSild';
import Search from '../components/course/Search/Search';
import styles from './CourseList.module.scss';
import CoursesLoader from '../components/course/Loader/CoursesLoader';
import PortfoliosLoader from '../components/course/Loader/PortfolioLoader';
import SearchLoader from '../components/course/Loader/SearchLoader';

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
               <CoursesLoader />
            </>
         ) : (
            <>
               <PortfolioSlid />
               <Search />
            </>
         )}
      </div>
   );
}
