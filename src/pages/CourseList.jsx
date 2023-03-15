import React, { useState, useEffect } from 'react';
import PortfolioSlid from '../components/course/PortfolioSild';
import Search from '../components/course/Search';
import styles from './CourseList.module.scss';
import CoursesLoader from '../components/course/CoursesLoader';
import PortfoliosLoader from '../components/course/PortfolioLoader';
import SearchLoader from '../components/course/SearchLoader';

export default function CourseList() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // 여기에서 데이터 로딩을 처리하고, 데이터 로딩이 완료되면 setLoading(false)를 호출하여 로딩 상태를 변경합니다.
      // 예를 들어, 아래와 같이 setTimeout 함수를 사용하여 3초 후에 로딩 상태를 변경하는 코드를 작성할 수 있습니다.
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
