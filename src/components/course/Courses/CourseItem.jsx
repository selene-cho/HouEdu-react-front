import styles from './Courses.module.scss';
import { Link } from 'react-router-dom';

export default function CourseItem({ course, onClick }) {
  return (
    <div className={styles.courses}>
      <Link
        to={`/course/courses/${course.id}`}
        key={course.id}
        onClick={onClick}
      >
        <img
          className={styles.crs__image}
          src={course.thumbnail}
          alt={`courses ${course.id}`}
        />
      </Link>
      <div>
        <span>{course.category.name}</span>
        <p>{course.tcr.tcr_name}</p>
        <p>{course.crs_name}</p>
        <p>{course.price}</p>
      </div>
    </div>
  );
}
