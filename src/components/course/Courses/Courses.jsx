import React, { useState, useMemo } from 'react';
import styles from './Courses.module.scss';
import { getCourses } from '../../../api/api';
import { useQuery } from '@tanstack/react-query';
import CourseItem from './CourseItem';

const SHOW_COUNT_DEFAULT = 4;
const ALL_CATEGORIES_FILTER = '*';

export default function Courses() {
   const { data } = useQuery(['course/'], getCourses, {
      staleTime: Infinity, // 캐시 만료 시간을 무한대로 설정
   });
   const [showCount, setShowCount] = useState(SHOW_COUNT_DEFAULT);
   const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES_FILTER);

   const handleItemClick = () => {
      window.scrollTo(0, 0);
   };

   const filteredCourses = useMemo(() => {
      if (!data) return [];

      if (selectedCategory === ALL_CATEGORIES_FILTER) {
         return data;
      }

      return data.filter(course => course?.category.name === selectedCategory);
   }, [data, selectedCategory]);

   const handleFilter = category => setSelectedCategory(category);

   const hasMoreCourses = showCount < filteredCourses.length;

   const handleShowMore = () => {
      setShowCount(prevCount => prevCount + SHOW_COUNT_DEFAULT);
   };

   const slicedCourses = useMemo(() => filteredCourses.slice(0, showCount), [filteredCourses, showCount]);

   return (
      <div className={styles.container}>
         {/* <div className={styles.search}>
            <SearchCourse />
         </div> */}
         <div className={styles.filterButtons}>
            <button type='button' className={selectedCategory === '*' ? styles.active : ''} onClick={() => handleFilter('*')}>
               모두
            </button>
            <button type='button' className={selectedCategory === '기초' ? styles.active : ''} onClick={() => handleFilter('기초')}>
               기초
            </button>
            <button type='button' className={selectedCategory === '중급' ? styles.active : ''} onClick={() => handleFilter('중급')}>
               중급
            </button>
            <button type='button' className={selectedCategory === '고급' ? styles.active : ''} onClick={() => handleFilter('고급')}>
               고급
            </button>
         </div>

         <div className={styles.course}>
            {slicedCourses.map(course => (
               <CourseItem key={course.id} course={course} onClick={handleItemClick} />
            ))}
         </div>
         {hasMoreCourses && (
            <div className={styles.showMore} onClick={handleShowMore}>
               더 보기
            </div>
         )}
      </div>
   );
}
