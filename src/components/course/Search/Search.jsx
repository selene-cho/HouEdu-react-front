import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Courses from '../Courses/Courses';
import styles from './SearchCourse.module.scss';
import data from '../../../dummy/data.json';

const coursesData = data.lecture;

export default function SearchCourse() {
   console.log('전체리스트 데이터:', coursesData);
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
            const matchedKeywords = courseKeywords.filter(keyword => searchTerms.some(term => term.includes(keyword)));
            return matchedKeywords.length === searchTerms.length;
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

      let matchedCourses = filteredCourses;
      console.log('필터:', matchedCourses);
      let allCourses = coursesData;
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

//랜더함수
// const renderCourses = () => {
//    if (isLoading) {
//       return <Courses />;
//    }

//    const matchedCourses = filteredCourses.filter(course => {
//       const courseKeywords = [
//          course.tcr.tcr_name?.toLowerCase(),
//          course.crs_name?.toLowerCase(),
//          ...(course.keywords || []).map(keyword => keyword.toLowerCase()),
//       ];
//       return courseKeywords.some(keyword => searchTerm.includes(keyword));
//    });

//    if (matchedCourses.length === 0) {
//       return (
//          <div className={styles.popup}>
//             <p>검색 결과가 없습니다. 다시 입력하세요.</p>
//          </div>
//       );
//    }

//    return <div className={styles.courses}>{matchedCourses.length < filteredCourses.length && <Courses />}</div>;
// };

//검색어 자동완성,  지연검색, 대소문자 구분없는 검색결과, 결과 변경 시 데이터 호출,정렬 및 필터링 알고리즘 추가, 페이지네이션 의 기능을
