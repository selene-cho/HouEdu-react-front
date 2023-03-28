import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Courses from '../Courses/Courses';
import styles from './SearchCourse.module.scss';
import { getCourses } from '../../../api/api';

export default function SearchCourse() {
   const [searchTerm, setSearchTerm] = useState('');

   const { data: filteredCourses = [], isLoading } = useQuery(['course/', getCourses], async () => {
      const searchTerms = searchTerm.trim().toLowerCase().split(' ');
      if (searchTerm) {
         return filteredCourses.filter(course => {
            const courseKeywords = [
               course.tcr?.tcr_name?.toLowerCase(),
               course.crs_name?.toLowerCase(),
               ...(course.keywords || []).map(keyword => keyword.toLowerCase()),
            ];
            const matchedKeywords = courseKeywords.filter(keyword => searchTerms.some(term => term.includes(keyword)));
            return matchedKeywords.length === searchTerms.length;
         });
      } else {
         return filteredCourses;
      }
   });

   const handleSearch = e => {
      e.preventDefault();
   };

   const handleInputChange = e => {
      setSearchTerm(e.target.value);
   };

   const renderCourses = () => {
      if (isLoading) {
         return <Courses />;
      }

      let matchedCourses = filteredCourses;
      console.log('필터:', matchedCourses);
      let allCourses = filteredCourses;
      console.log('전체:', allCourses);

      if (searchTerm !== '') {
         matchedCourses = matchedCourses.filter(course => {
            const courseKeywords = [
               course.tcr.tcr_name?.toLowerCase(),
               course.crs_name?.toLowerCase(),
               ...(course.keywords || []).map(keyword => keyword.toLowerCase()),
            ];
            console.log('course', course);
            return courseKeywords.some(keyword => searchTerm.includes(keyword));
         });
      }

      if (filteredCourses.length === 0) {
         return (
            <div className={styles.popup}>
               <p>검색결과가 없습니다.😔</p>
            </div>
         );
      }
      return <div className={styles.courses}>{matchedCourses.length < filteredCourses.length && <Courses />}</div>;
   };

   return (
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

         {searchTerm === '' ? <Courses /> : renderCourses()}
      </div>
   );
}
