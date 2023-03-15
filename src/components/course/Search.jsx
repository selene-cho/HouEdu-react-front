import React, { useState, useMemo } from 'react';
import Courses from './Courses';
import styles from './SearchCourse.module.scss';
import CoursesLoader from './CoursesLoader';
import data from '../../dummy/data.json';

export default function Search() {
   const [searchTerm, setSearchTerm] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const filteredData = useMemo(() => {
      const searchTerms = searchTerm.trim().toLowerCase().split(' ');
      if (searchTerm) {
         return data.filter(course => {
            const courseKeywords = [
               course.tcr?.tcr_name?.toLowerCase(),
               course.crs_name?.toLowerCase(),
               ...(course.keywords || []).map(keyword => keyword.toLowerCase()),
            ];
            return searchTerms.every(term => courseKeywords.some(keyword => keyword.includes(term)));
         });
      } else {
         return data;
      }
   }, [searchTerm]);

   const handleSearch = e => {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(() => {
         setIsLoading(false);
      }, 1000);
   };

   const handleInputChange = e => {
      setSearchTerm(e.target.value);
   };

   const renderCourses = () => {
      if (isLoading) {
         return <CoursesLoader />;
      }
      if (filteredData.length === 0) {
         return (
            <div className={styles.popup}>
               <p>검색 결과가 없습니다. 다시 입력하세요.</p>
            </div>
         );
      }
      return (
         <div>
            {filteredData.map(course => {
               const courseKeywords = [
                  course.tcr?.tcr_name?.toLowerCase(),
                  course.crs_name?.toLowerCase(),
                  ...(course.keywords || []).map(keyword => keyword.toLowerCase()),
               ];
               const isMatched = courseKeywords.some(keyword => searchTerm.includes(keyword));
               if (!isMatched) {
                  return null;
               }
               return <Courses courses={course} />;
            })}
         </div>
      );
   };

   return (
      <>
         <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSearch}>
               <input
                  className={styles.input}
                  type='text'
                  placeholder='주제, 강의이름, 강의관련 키워드를 검색하세요'
                  onChange={handleInputChange}
                  value={searchTerm}
               />
               <button className={styles.search} type='submit'>
                  검색
               </button>
            </form>
         </div>

         {searchTerm === '' ? <Courses /> : renderCourses()}
      </>
   );
}
