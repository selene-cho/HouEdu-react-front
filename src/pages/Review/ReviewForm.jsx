import { useState } from 'react';
import RatingInput from './RatingInput';
import mock from '../../dummy/reviews.json';

import styles from './ReviewForm.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getMyReviews } from '../../api/api';

export default function ReviewForm() {
  const { data } = useQuery(['myreviews'], getMyReviews);

  const [values, setValues] = useState({
    crs: '',
    star: 0,
    content: '',
  });

  const handleChange = (name, value) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>수강 후기</h1>
        <form className={styles.reviewForm} onSubmit={handleSubmit}>
          <div className={styles.courses}>
            <select
              className={styles.courseName}
              name="crs"
              value={values.crs}
              onChange={handleInputChange}
              key={values.crs}
              placeholder="강의명 선택"
              required
            >
              {data?.reviews.map((review) => {
                return (
                  <option
                    key={review.id}
                    value={review.crs.crs_name}
                    className={styles.option}
                  >
                    {review.crs.crs_name}
                  </option>
                );
              })}
            </select>
          </div>
          <RatingInput
            className={styles.input}
            name="star"
            value={values.star}
            onChange={handleChange}
            required
          />
          <textarea
            className={styles.content}
            name="content"
            value={values.content}
            onChange={handleInputChange}
            cols="50"
            rows="8"
            minLength={20}
            placeholder="솔직한 수강후기 부탁드립니다♥︎ (최소 20자 이상)"
            required
          />
          <button type="submit">확인</button>
        </form>
      </div>
    </div>
  );
}
