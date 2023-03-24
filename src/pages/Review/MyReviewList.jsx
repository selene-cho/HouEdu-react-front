import styles from './ReviewList.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getMyReviews } from '../../api/api';
import Review from './Review';
import { useEffect, useState } from 'react';

/* Review 전체 */
export default function ReviewList() {
  const { data } = useQuery([`myreviews`], getMyReviews);
  console.log('mydata', data);

  const [items, setItems] = useState([]);
  console.log('items', items);
  // const [order, setOrder] = useState('created_at');

  // const sortedReviews = items.sort((a, b) => b[order] - a[order]);

  // const handleNewestClick = () => setOrder('created_at');
  // const handleBestClick = () => setOrder('star');

  const handleDelete = (id) => {
    const nextData = items.filter((item) => item.id !== id);
    setItems(nextData);
  };

  // const handleLoad = async (options) => {
  //   const { data } = await getReviews(options);
  //   setItems((prevItems) => [...prevItems, ...data]);
  // };

  useEffect(() => {
    setItems(data);
  }, []);

  // useEffect(() => {
  //   handleLoad(order);
  // }, [order]);

  // useEffect(() => {
  //   if (data) {
  //     setItems(data);
  //   }
  // }, [order]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        {/* <div className={styles.option}>
          <div className={styles.order}>
            <button onClick={handleNewestClick}>최신순</button>
            <button onClick={handleBestClick}>별점 높은 순</button>
          </div>
        </div> */}
        <ul className={styles.reviews}>
          {items?.map((item) => {
            return (
              <li key={item.id}>
                <Review item={item} onDelete={handleDelete} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
