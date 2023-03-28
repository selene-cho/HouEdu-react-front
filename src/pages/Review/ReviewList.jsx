import styles from './ReviewList.module.scss';
import { useQuery } from '@tanstack/react-query';
import { deleteReviews, getReviews } from '../../api/api';
import Review from './Review';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* Review 전체 */
export default function ReviewList() {
  const {
    isLoading,
    data: reviews,
    error,
  } = useQuery(['reviews'], getReviews, {
    staleTime: 2000,
  });
  // console.log('reviews', reviews);
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  // console.log('items', items);
  const [order, setOrder] = useState();

  const sortedReviews = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('id');
  const handleBestClick = () => setOrder('star');

  const handleDelete = async (id) => {
    const result = await deleteReviews(id);
    if (!result) return;
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    navigate('reviews');
  };

  useEffect(() => {
    if (reviews) {
      setItems(reviews);
    }
  }, [reviews]);

  return (
    <section className={styles.container}>
      {isLoading && (
        <div>
          <p>로딩중입니다...</p>
          <p>잠시만 기다려 주세요</p>
        </div>
      )}
      {error && <div>{error}</div>}
      {!isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.option}>
            <div className={styles.order}>
              <button onClick={handleNewestClick}>최신순</button>
              <button onClick={handleBestClick}>별점 높은 순</button>
            </div>
          </div>
          <ul className={styles.reviews}>
            {sortedReviews?.map((item) => {
              return (
                <li key={item.id}>
                  <Review review={item} onDelete={handleDelete} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
