import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Courses from '../Courses/Courses';
import styles from './SearchCourse.module.scss';
import data from '../../../dummy/data.json';

const coursesData = data.lecture;

export default function SearchCourse() {
   console.log('1', coursesData);
   const [searchTerm, setSearchTerm] = useState('');

   const { data: filteredCourses = [], isLoading } = useQuery(['courses', searchTerm], async () => {
      const searchTerms = searchTerm.trim().toLowerCase().split(' ');
      if (searchTerm) {
         return coursesData.filter(course => {
            const courseKeywords = [
               course.tcr?.tcr_name?.toLowerCase(),
               course.crs_name?.toLowerCase(),
               ...(course.keywords || []).map(keyword => keyword.toLowerCase()),
            ];
            return searchTerms.every(term => courseKeywords.some(keyword => keyword.includes(term)));
         });
      } else {
         return coursesData;
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

      const matchedCourses = filteredCourses.filter(course => {
         const courseKeywords = [
            course.tcr.tcr_name?.toLowerCase(),
            course.crs_name?.toLowerCase(),
            ...(course.keywords || []).map(keyword => keyword.toLowerCase()),
         ];
         return courseKeywords.some(keyword => searchTerm.includes(keyword));
      });

      if (matchedCourses.length === 0) {
         return (
            <div className={styles.popup}>
               <p>검색 결과가 없습니다. 다시 입력하세요.</p>
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
