import Rating from './Rating';
import styles from './Reviews.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../../api/api';
import { useState } from 'react';

/* 날짜 형식 변환 YYYY. MM. DD */
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`;
}

/* Review 1개 */
function Review({ item, onDelete }) {
  console.log('item', item);
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <div className={styles.review}>
      <div className={styles.title}>
        <h1>{item.crs.crs_name}</h1>
        <Rating value={item.star} />
      </div>
      <div className={styles.time}>
        <p>{formatDate(item.created_at)}</p>
        {/* <p>{formatDate(item.updated_at)}</p> */}
      </div>
      <p className={styles.nickname}>{item.user.nickname}</p>
      <p className={styles.content}>{item.content}</p>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

/* Review 전체 */
export default function Reviews() {
  const { data } = useQuery(['reviews'], getReviews);

  const [items, setItems] = useState(data);

  const [order, setOrder] = useState('created_at');
  const sortedReviews = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('created_at');
  const handleBestClick = () => setOrder('star');

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  return (
    <div className={styles.container}>
      <div className={styles.option}>
        <input type="checkbox" />
        <label>내가 작성한 글</label>
        <div className={styles.order}>
          <button onClick={handleNewestClick}>최신순</button>
          <button onClick={handleBestClick}>별점 높은 순</button>
        </div>
      </div>
      <ul className={styles.reviews}>
        {sortedReviews?.map((review) => {
          return (
            <li key={review.id}>
              <Review item={review} onDelete={handleDelete} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
