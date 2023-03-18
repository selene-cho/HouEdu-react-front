import Rating from './Rating';
import styles from './Reviews.module.scss';
import mock from '../../dummy/reviews.json';
import ReviewForm from './ReviewForm';

/* Review 1개 */
function Review({ item }) {
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
  return (
    <div className={styles.container}>
      <ReviewForm />
      <ul className={styles.reviews}>
        {mock.reviews.map((item) => {
          return (
            <li key={item.id}>
              <Review item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
