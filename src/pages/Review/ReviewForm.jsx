import { useState } from 'react';
import RatingInput from './RatingInput';
import styles from './ReviewForm.module.scss';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getMyInfo, postReviews } from '../../api/api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const INITIAL_VALUES = {
  crs: '',
  star: 0,
  content: '',
};

export default function ReviewForm() {
  const { data: myCourse } = useQuery(['myinfo'], getMyInfo, {
    staleTime: 1000 * 60,
  });
  // console.log('myCourse', myCourse);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [values, setValues] = useState(INITIAL_VALUES);
  // console.log('values', values);

  const handleChange = (name, value) => {
    setValues((preValues) => ({
      ...preValues,
      [name]: value,
    }));
  };

  const saveValues = useMutation(postReviews, values, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myinfo']);
      navigate('users/myinfo/myreviews/');
    },
  });
  // console.log('saveValues', saveValues);

  const onSaveValues = () => {
    saveValues.mutate(values);
  };

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
              placeholder={'강의명 선택'}
              value={values.crs}
              required
            >
              <option value="" disabled>
                강의명 선택
              </option>
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
            cols="50"
            rows="8"
            required
            placeholder="솔직한 수강후기 부탁드립니다♥︎"
          />
          <button type="submit" onClick={onSaveValues}>
            확인
          </button>
        </form>
      </div>
    </div>
  );
}
