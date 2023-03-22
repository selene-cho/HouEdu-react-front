import { FaHome } from 'react-icons/fa';
import { useRouteError, Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.container}>
      <h1>Oops! 🫥</h1>
      <div className={styles.content}>
        <p>해당 페이지를 찾지 못했습니다</p>
        <p>주소가 잘못되었거나, 더 이상 제공하지 않는 페이지입니다.</p>
      </div>
      <div className={styles.error}>
        에러 메세지 : <i>{error.statusText || error.message}</i>
      </div>
      <Link to="/" className={styles.goToMain}>
        <FaHome />
        <p>메인페이지로</p>
      </Link>
    </div>
  );
}
