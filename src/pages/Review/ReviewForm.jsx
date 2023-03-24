import { useState } from 'react';
import RatingInput from './RatingInput';
import mock from '../../dummy/reviews.json';

import styles from './ReviewForm.module.scss';
import { useQuery } from '@tanstack/react-query';
import { getMyReviews, postReviews } from '../../api/api';

const INITIAL_VALUES = {
  crs: '',
  star: 0,
  content: '',
};

// const {
//   register, formState: {errors}, handleSubmit, setError
// } = useForm();

export default function ReviewForm() {
  const { isLoading, data } = useQuery(['myreviews'], getMyReviews);

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(INITIAL_VALUES);

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
  };

  //   const formData = new FormData();
  //   formData.append('crs', values.crs);
  //   formData.append('star', values.star);
  //   formData.append('content', values.content);

  //   let result;
  //   try {
  //     setSubmittingError(null);
  //     setIsSubmitting(true);
  //     result = await postMyReviews(formData);
  //   } catch (error) {
  //     setSubmittingError(error);
  //     return;
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  //   const { data } = result;
  //   onSubmitSuccess(data);
  //   setValues(INITIAL_VALUES);
  // };

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
          <button type="submit" onSubmit={handleSubmit}>
            확인
          </button>
          {/* {submittingError?.message && <div>{submittingError.message}</div>} */}
        </form>
      </div>
    </div>
  );
}
