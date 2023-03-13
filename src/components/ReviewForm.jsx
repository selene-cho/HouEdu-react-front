import { useState } from 'react';
import RatingInput from './RatingInput';
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
    <form className={styles.reviewForm} onSubmit={handleSubmit}>
      <input
        name="crs"
        value={values.crs.crs_name}
        onChange={handleInputChange}
      />
      <RatingInput name="star" value={values.star} onChange={handleChange} />
      <textarea
        name="content"
        value={values.content}
        onChange={handleInputChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}
