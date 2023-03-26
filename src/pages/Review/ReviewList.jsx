import styles from './ReviewList.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../../api/api';
import Review from './Review';
import { useEffect, useState } from 'react';

/* Review 전체 */
export default function ReviewList() {
  const { data: reviews } = useQuery(['reviews'], getReviews, {
    staleTime: 3000,
  });
  console.log('reviews', reviews);

  const [items, setItems] = useState([]);
  console.log('items', items);
  const [order, setOrder] = useState('created_at');

  useEffect(() => {
    setItems(reviews);
  }, [reviews]);

  // useEffect(() => {
  //   if (reviews) {
  //     setItems(reviews);
  //   }
  // }, [reviews]);

  const sortedReviews = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder('created_at');
  const handleBestClick = () => setOrder('star');

  const handleDelete = ({ id }) => {
    const nextData = items.filter((item) => item.id !== id);
    setItems(nextData);
  };

  // const handleLoad = async (options) => {
  //   const { data } = await getReviews(options);
  //   setItems((prevItems) => [...prevItems, ...data]);
  // };

  // useEffect(() => {
  //   handleLoad(order);
  // }, [order]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.option}>
          <div className={styles.label}>
            <input id="checkbox" type="checkbox" />
            <label htmlFor="checkbox">내가 작성한 글</label>
          </div>
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
    </section>
  );
}
