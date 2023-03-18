import { useState } from 'react';
import RatingInput from './RatingInput';
import mock from '../../dummy/reviews.json';

import styles from './ReviewForm.module.scss';

export default function ReviewForm() {
  const [values, setValues] = useState({
    course: '',
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
      <h1>수강 후기</h1>
      <form className={styles.reviewForm} onSubmit={handleSubmit}>
        <div className={styles.courses}>
          <p>강의 명: </p>
          <select
            className={styles.courseName}
            name="course"
            value={values.course}
            onChange={handleInputChange}
            required
          >
            <option selected="selected">강의명 선택</option>
            {mock.reviews.map((item) => {
              return <option key={item.id}>{item.crs.crs_name}</option>;
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
  );
}
