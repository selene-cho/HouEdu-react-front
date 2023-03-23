import React, { useState, useEffect } from 'react';
import styles from './Courses.module.scss';
import { Link } from 'react-router-dom';
import { fetchCourse } from '../../../api/api';

const SHOW_COUNT_DEFAULT = 4;
const ALL_CATEGORIES_FILTER = '*';

export default function Courses() {
   const [showCount, setShowCount] = useState(SHOW_COUNT_DEFAULT);
   const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES_FILTER);
   const [course, setCourse] = useState([]);

   useEffect(() => {
      const getCourses = async () => {
         const data = await fetchCourse();
         setCourse(data);
      };

      getCourses();
   }, []);

   const filteredCourses = course?.filter(course => selectedCategory === ALL_CATEGORIES_FILTER || selectedCategory === course?.crs_category);

   const handleShowMore = () => setShowCount(prevCount => prevCount + SHOW_COUNT_DEFAULT);

   const handleFilter = category => setSelectedCategory(category);

   const CourseItem = ({ course }) => (
      <div className={styles.courses}>
         <Link to={`/course/${course.id}`} key={course.id}>
            <img className={styles.crs__image} src={course.thumbnail} alt={`courses ${course.id}`} />
         </Link>
         <div>
            <span>{course.category}</span>
            <p>{course.tcr.tcr_name}</p>
            <p>{course.crs_name}</p>
            <p>{course.price}</p>
         </div>
      </div>
   );

   return (
      <div className={styles.container}>
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
