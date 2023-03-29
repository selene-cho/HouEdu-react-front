import React from 'react';
import CourseItem from '../../components/course/Courses/CourseItem';
import Carousel from './Carousel';
import Teachers from './Teachers';

export default function Home() {
  return (
    <>
      <Carousel />
      {/* <div className={styles.course}>
        <CourseItem key={course.id} course={course} />
      </div> */}
      <Teachers />
    </>
  );
}
