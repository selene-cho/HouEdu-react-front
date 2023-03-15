import { useState } from 'react';
import RatingInput from './RatingInput';
import mock from '../dummy/reviews.json';

import styles from './ReviewForm.module.scss';

export default function ReviewForm() {
  const [values, setValues] = useState({
    crs: '',
    star: 0,
    content: '',
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
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
      <h1>수강 후기</h1>
      <form className={styles.reviewForm} onSubmit={handleSubmit}>
        <div className={styles.courses}>
          <p>강의 명: </p>
          <select className={styles.courseName}>
            {mock.reviews.map((item) => {
              return (
                <option value={item.crs.crs_name}>{item.crs.crs_name}</option>
              );
            })}
          </select>
        </div>
        <RatingInput
          className={styles.input}
          name="star"
          value={values.star}
          onChange={handleChange}
        />
        <textarea
          className={styles.content}
          name="content"
          value={values.content}
          onChange={handleInputChange}
          cols="60"
          rows="8"
          placeholder="솔직한 평가 부탁드립니다 ♥︎"
        />
        <button className={styles.button} type="submit">
          확인
        </button>
      </form>
    </div>
  );
}
