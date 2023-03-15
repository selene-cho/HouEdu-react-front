import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import styles from './Rating.module.scss';

const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected = false, star, onSelect, onHover }) {
  // const { className } = `${selected ? 'selected' : ''}`;

  const handleClick = onSelect ? () => onSelect(star) : undefined;
  // onSelect 값 있을 때 onSelect(rating) 로 지정, 없을 때는 undefined

  const handleMouseOver = onHover ? () => onHover(star) : undefined;

  return (
    // <span
    //   className={`${styles.ratingStar} ${className}`}
    //   onClick={handleClick}
    //   onMouseOver={handleMouseOver}
    // >
    //   ★
    // </span>
    <FaStar
      className={styles.star}
      color={selected ? 'rgb(255, 208, 0)' : ' lightgray'}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
    />
  );
}

// function Star({ selected = false, onSelect, onHover }) {
//   return <FaStar color={selected ? 'rgb(255, 208, 0)' : ' lightgray'} />;
// }

// const createArray = (length) => [...Array(length)];

// export default function StarRating({totalStars = 5}) {
//   const [selectedStar] = useState(0);
//   return (
//     <>
//       {createArray(totalStars).map((n,i)=>(
//         <Star key={i} selected={selectedStar > i} />
//       ))}
//       <p>
//         {selectedStar}/ {totalStars}
//       </p>
//     </>
//   );
// }

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
          selected={value >= star}
          rating={star}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  );
}
