import React, { useState, useEffect } from 'react';
import styles from './Courses.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import data from '../../dummy/data.json';

const lectures = data.lecture;

export default function Courses() {
   const [showCount, setShowCount] = useState(4);
   const { courseId } = useParams();
   const navigator = useNavigate();

   const handleNav = () => {
      navigator(`/courses/${courseId}`);
   };

   const handleShowMore = () => {
      setShowCount(showCount + 4);
   };

   return (
      <div className={styles.container}>
         {lectures
            .filter(courses => !courseId || courses.id === courseId) // 필터링 조건 수정
            .slice(0, showCount)
            .map(courses => (
               <Link to={`/courses/${courses.id}`} key={courses.id}>
                  {/* Link에 key 추가 */}
                  <div className={styles.courses} onClick={handleNav}>
                     <img className={styles.crs__image} src={courses.url} alt={`courses ${courses.id}`} />
                     <p>{courses.crs_name}</p>
                     <p>{courses.crs_info}</p>
                     <p>{courses.crs_price}</p>
                  </div>
               </Link>
            ))}
         {showCount < lectures.length && (
            <div className={styles.show__more} onClick={handleShowMore}>
               더 보기
            </div>
         )}
      </div>
   );
}
