import { useState } from 'react';
import RatingInput from './RatingInput';

import styles from './ReviewForm.module.scss';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getMyReviews, postReviews } from '../../api/api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const INITIAL_VALUES = {
  crs: '',
  star: 0,
  content: '',
};

// const {
//   register, formState: {errors}, handleSubmit, setError
// } = useForm();

export default function ReviewForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const mutation = useMutation(postReviews, {
    onSuccess: () => {
      navigate('users/myinfo/myreviews/');
    },
  });

  const { data: myCourse } = useQuery(['mycourse'], getMyReviews);

  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  // const queryClient = useQueryClient();
  // // const { register, handleSubmit } = useForm();

  // const { data: myReviewClass } = useQuery(['myreviews'], getMyReviews);
  // console.log('myReviewClass', myReviewClass);
  // // const {data: post}
  // // const [isSubmitting, setIsSubmitting] = useState(false);
  // // const [submittingError, setSubmittingError] = useState(null);
  // const [values, setValues] = useState(INITIAL_VALUES);
  // console.log('values', values);

  // const handleChange = (name, value) => {
  //   setValues((preValues) => ({
  //     ...preValues,
  //     [name]: value,
  //   }));
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   handleChange(name, value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>수강 후기</h1>
        <form className={styles.reviewForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.courses}>
            <select
              className={styles.courseName}
              {...register('crs_name', { required: true })}
              placeholder="강의명 선택"
              required
            >
              {myCourse?.map((review) => {
                return (
                  <option
                    key={review.id}
                    value={review.id}
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
            // name="star"
            // value={values.star}
            // onChange={handleChange}
            {...register('star', { required: true })}
            required
          />
          <textarea
            className={styles.content}
            {...register('content', { required: true })}
            cols="50"
            rows="8"
            minLength={20}
            placeholder="솔직한 수강후기 부탁드립니다♥︎ (최소 20자 이상)"
            required
          />
          {mutation.error ? <p>Something went wrong</p> : null}
          <button type="submit">확인</button>
          {/* {submittingError?.message && <div>{submittingError.message}</div>} */}
        </form>
      </div>
    </div>
  );
}
