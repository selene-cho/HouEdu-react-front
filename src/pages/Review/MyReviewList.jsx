import styles from './MyReviewList.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getMyReviews } from '../../api/api';
import Review from './Review';

/* Review 전체 */
export default function MyReviewList() {
  const {
    isLoading,
    data: myReviews,
    error,
  } = useQuery([`myreviews`], getMyReviews, {
    staleTime: 1000 * 60,
  });
  console.log('myReviews', myReviews);

  // const [items, setItems] = useState(data);
  // console.log('items', items);
  // // const [order, setOrder] = useState('created_at');

  // const sortedReviews = items.sort((a, b) => b[order] - a[order]);

  // const handleNewestClick = () => setOrder('created_at');
  // const handleBestClick = () => setOrder('star');

  // const handleDelete = (id) => {
  //   const nextData = items.filter((item) => item.id !== id);
  //   setItems(nextData);
  // };

  // const handleLoad = async (options) => {
  //   const { data } = await getReviews(options);
  //   setItems((prevItems) => [...prevItems, ...data]);
  // };

  // useEffect(() => {
  //   setItems(data);
  // }, []);

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
      {isLoading && (
        <div>
          <p>로딩중입니다...</p>
          <p>잠시만 기다려 주세요</p>
        </div>
      )}
      {error && <div>{error}</div>}
      <div className={styles.wrapper}>
        {/* <div className={styles.option}>
          <div className={styles.order}>
            <button onClick={handleNewestClick}>최신순</button>
            <button onClick={handleBestClick}>별점 높은 순</button>
          </div>
        </div> */}
        <ul className={styles.reviews}>
          {myReviews &&
            myReviews.map((review) => {
              return (
                <li key={review.id}>
                  <Review review={review} />
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
