import { useState } from 'react';
import RatingInput from './RatingInput';

import styles from './ReviewForm.module.scss';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getMyInfo, getMyReviews, postReviews } from '../../api/api';
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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { data: myCourse } = useQuery(['myinfo'], getMyInfo, {
    staleTime: 1000 * 60,
  });
  console.log('myCourse', myCourse);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [values, setValues] = useState(INITIAL_VALUES);
  console.log('values', values);

  const handleChange = (name, value) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const saveValues = useMutation(postReviews, values, {
    onSuccess: () => {
      // queryClient.refetchQueries(['myinfo']);
      queryClient.invalidateQueries(['myinfo']);
      navigate('users/myinfo/myreviews/');
    },
  });
  console.log('saveValues', saveValues);

  const onSaveValues = () => {
    saveValues.mutate(values);
  };

  // const mutation = useMutation(postReviews, {
  //   onSuccess: () => {
  //     queryClient.refetchQueries(['mycourse']);
  //     navigate('users/myinfo/myreviews/');
  //   },
  // });

  // const onSubmit = ({ crs, star, content }) => {
  //   mutation.mutate({ crs, star, content });
  //   console.log('crs', crs);
  //   console.log('star', star);
  //   console.log('content', content);
  // };

  // const queryClient = useQueryClient();
  // // const { register, handleSubmit } = useForm();
  // // const [isSubmitting, setIsSubmitting] = useState(false);
  // // const [submittingError, setSubmittingError] = useState(null);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   handleChange(name, value);
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>수강 후기</h1>
        <form className={styles.reviewForm}>
          <div className={styles.courses}>
            <select
              className={styles.courseName}
              onChange={(e) => {
                setValues((currentValues) => {
                  return {
                    ...currentValues,
                    crs: e.target.value,
                  };
                });
              }}
              value={values.crs}
              required
              // {...register('crs', { required: true })}
              placeholder="강의명 선택"
            >
              {myCourse?.userCourses.map((review) => (
                <option
                  key={review.id}
                  value={review.course.id}
                  className={styles.option}
                >
                  {review.course.crs_name}
                </option>
              ))}
            </select>
          </div>
          <RatingInput
            className={styles.input}
            name="star"
            value={values.star}
            onChange={handleChange}
            required
            // {...register('star', { required: true })}
          />
          <textarea
            className={styles.content}
            value={values.content}
            onChange={(e) => {
              setValues((currentValues) => {
                return {
                  ...currentValues,
                  content: e.target.value,
                };
              });
            }}
            // {...register('content', {
            //   required: true,
            //   minLength: { value: 20, message: '최소 20자 이상 작성해주세요.' },
            // })}
            cols="50"
            rows="8"
            required
            placeholder="솔직한 수강후기 부탁드립니다♥︎"
          />
          {errors.content && (
            <div className={styles.error}>{errors.content.message}</div>
          )}
          <button type="submit" onClick={onSaveValues}>
            확인
          </button>
          {/* {submittingError?.message && <div>{submittingError.message}</div>} */}
        </form>
      </div>
    </div>
  );
}
