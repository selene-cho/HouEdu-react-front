import { Link } from 'react-router-dom';
import styles from './CategoryNavbar.module.scss';

export default function CategoryNavbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.categoryNav}>
        <Link to="edit/profile" className={styles.link}>
          <li>회원정보 수정</li>
        </Link>
        <Link to="edit/password" className={styles.link}>
          <li>비밀번호 변경</li>
        </Link>
        <Link to="review" className={styles.link}>
          <li>마이 리뷰</li>
        </Link>
      </ul>
    </div>
  );
}
