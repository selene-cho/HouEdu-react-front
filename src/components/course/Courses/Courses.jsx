import React, { useState, useEffect } from 'react';
import styles from './Courses.module.scss';
import { Link } from 'react-router-dom';
import { getCourses } from '../../../api/api';
import { useQuery } from '@tanstack/react-query';

const SHOW_COUNT_DEFAULT = 4;
const ALL_CATEGORIES_FILTER = '*';

export default function Courses() {
   const { data } = useQuery([`courses/`], getCourses);
   const [showCount, setShowCount] = useState(SHOW_COUNT_DEFAULT);
   const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES_FILTER);
   const [course, setCourse] = useState([]);
   console.log('course', course);

   useEffect(() => {
      setCourse(data);
   }, []);

   const filteredCourses = data?.filter(course => selectedCategory === ALL_CATEGORIES_FILTER || selectedCategory === course?.crs_category);

   const handleShowMore = () => setShowCount(prevCount => prevCount + SHOW_COUNT_DEFAULT);

   const handleFilter = category => setSelectedCategory(category);

   const categoryBtn = [
      { name: '모두', value: ALL_CATEGORIES_FILTER },
      { name: '기초', value: '기초' },
      { name: '중급', value: '중급' },
      { name: '고급', value: '고급' },
   ];

   const CourseItem = ({ course }) => (
      <div className={styles.courses}>
         <Link to={`/courses/${course.id}`} key={course.id}>
            <img className={styles.crs__image} src={course.thumbnail} alt={`courses ${course.id}`} />
         </Link>
         <div>
            <span>{course.category.name}</span>
            <p>{course.tcr.tcr_name}</p>
            <p>{course.crs_name}</p>
            <p>{course.price}</p>
         </div>
      </div>
   );

   return (
      <div className={styles.container}>
         <div className={styles.filterButtons}>
            <button
               type='button'
               className={selectedCategory === ALL_CATEGORIES_FILTER ? styles.active : ''}
               onClick={() => handleFilter(ALL_CATEGORIES_FILTER)}
            >
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
            {filteredCourses?.slice(0, showCount).map(course => (
               <CourseItem key={course.id} course={course} />
            ))}
         </div>
         {filteredCourses && showCount < filteredCourses.length && filteredCourses.length > SHOW_COUNT_DEFAULT && (
            <div className={styles.showMore} onClick={handleShowMore}>
               더 보기
            </div>
         )}
      </div>
   );
}
