import Rating from './Rating';
import styles from './Reviews.module.scss';
// import mock from '../../dummy/reviews.json';
import ReviewForm from './ReviewForm';
import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../../api/api';

/* Review 1개 */
function Review({ item }) {
  console.log('item', item);
  return (
    <div className={styles.review}>
      <div className={styles.title}>
        <h1>{item.crs.crs_name}</h1>
        <Rating value={item.star} />
      </div>
      <div className={styles.time}>
        <p>{item.created_at}</p>
        <p>{item.updated_at}</p>
      </div>

      <p className={styles.nickname}>{item.user.nickname}</p>
      <p className={styles.content}>{item.content}</p>
    </div>
  );
}

/* Review 전체 */
export default function Reviews() {
  const { data } = useQuery(['reviews'], getReviews);
  console.log('data', data);

  return (
    <div className={styles.container}>
      <ReviewForm />
      <ul className={styles.reviews}>
        {data?.map((review) => {
          return (
            <li key={review.id}>
              <Review item={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
