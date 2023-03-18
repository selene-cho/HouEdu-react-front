import { FaStar } from 'react-icons/fa';
import styles from './Rating.module.scss';

/* 별 1개 */

function Star({ selected = false, star = 0, onSelect, onHover }) {
  // 리뷰 보여주기만하는 컴포넌트에서는 아무동작 일어나지 않도록
  // props 존재할 때만 handleClick 함수, handleMouseOver 함수 실행하도록
  const handleClick = onSelect ? () => onSelect(star) : undefined;
  // onSelect 값 있을 때 onSelect(star), 없을 때는 undefined
  const handleMouseOver = onHover ? () => onHover(star) : undefined;

  return (
    <FaStar
      className={styles.star}
      color={selected ? ' lightgray' : 'rgb(255, 208, 0)'}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    />
  );
}

/* 각 별점이 나타나는 값을 요소로 하는 배열 - map 메소드 사용 */
const RATINGS = [1, 2, 3, 4, 5];

/* 별 5개 전체 */

export default function Rating({
  className,
  value = 0,
  onSelect,
  onHover,
  onMouseOut,
}) {
  return (
    <div
      className={`${styles.ratingStar} ${className}`}
      onMouseOut={onMouseOut}
    >
      {RATINGS.map((star) => (
        <Star
          key={star}
          selected={value < star}
          star={star}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}
