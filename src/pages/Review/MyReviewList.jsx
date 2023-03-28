import styles from './MyReviewList.module.scss';
import { useQuery } from '@tanstack/react-query';
import { deleteReviews, getMyReviews } from '../../api/api';
import Review from './Review';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* MyReview 전체 */
export default function MyReviewList() {
  const {
    isLoading,
    data: myReviews,
    error,
  } = useQuery(['myreviews'], getMyReviews);
  // console.log('myReviews', myReviews);

  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  const handleDelete = async (id) => {
    const result = await deleteReviews(id);
    if (!result) return;
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    navigate('mypage/review');
  };

  useEffect(() => {
    if (myReviews) {
      setItems(myReviews);
    }
  }, [myReviews]);

  // const handleNewestClick = () => setOrder('created_at');
  // const handleBestClick = () => setOrder('star');

  // const handleLoad = async (options) => {
  //   const { data } = await getReviews(options);
  //   setItems((prevItems) => [...prevItems, ...data]);
  // };

  // useEffect(() => {
  //   setItems(data);
  // }, []);

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
          <ul className={styles.reviews}>
            {myReviews?.map((review) => {
              return (
                <li key={review.id}>
                  <Review review={review} onDelete={handleDelete} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
