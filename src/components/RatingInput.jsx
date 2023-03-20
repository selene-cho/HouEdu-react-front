import { useState } from 'react';
import Rating from './Rating';
import styles from './RatingInput.module.scss';

// input의 name, value / onChange - input 선택했을 때 실행할 함수
export default function RatingInput({ name, value, onChange }) {
  const [star, setStar] = useState(value);
  // 선택한 별점 보여주거나 마우스 올렸을 때 별점 미리 보여주는 데 사용

  const handleSelect = (nextValue) => onChange(name, nextValue);
  // 상위 컴포넌트인 ReviewForm에서 선택한 값 handle 반영

  const handleMouseOut = () => setStar(value);
  // 마우스 벗어 났을 때 Rating State 값 다시 value로 변경

  return (
    <Rating
      className={styles.ratingInput}
      value={star}
      onSelect={handleSelect} // 별 클릭시 해당값 선택
      onHover={setStar} // Hover시 Rating set 된것 처럼
      onMouseOut={handleMouseOut} // 마우스 벗어났을 때 미리보기 값이 아니라 선택된 값 보이도록
    />
  );
}
