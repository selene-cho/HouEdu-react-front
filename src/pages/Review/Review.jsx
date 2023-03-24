import styles from './Review.module.scss';
import Rating from './Rating';
import { FaTrash } from 'react-icons/fa';

/* 날짜 형식 변환 YYYY. MM. DD */
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`;
}

/* Review 1개 */
export default function Review({ item, onDelete }) {
  // console.log('item', item);
  const { crs, star, created_at, user, content, img_url } = item;

  const handleDeleteClick = () => onDelete(item.id);

  return (
    // <img className={styles.avatar} src={img_url} alt={user} />
    <div className={styles.review}>
      <div className={styles.title}>
        <h1>{crs.crs_name}</h1>
        <Rating value={star} />
      </div>
      <div className={styles.time}>
        <p>{formatDate(created_at)}</p>
      </div>
      <p className={styles.nickname}>{user.nickname}</p>
      <p className={styles.content}>{content}</p>
      <button onClick={handleDeleteClick}>
        <FaTrash />
      </button>
    </div>
  );
}
