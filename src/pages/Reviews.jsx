import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import Rating from '../components/Rating';
import styles from './Reviews.module.scss';
import mock from '../dummy/reviews.json';

function Review({ item }) {
  return (
    <div className={styles.review}>
      <div className={styles.title}>
        <h1>{item.crs.crs_name}</h1>
        <Rating value={item.star} />
      </div>
      <div className={styles.time}>
        <p>{item.created_at}</p>
        <p>{item.updated_at}</p>
      </div>

      <p className={styles.nickname}>{item.user.nickname}</p>
      <p className={styles.content}>{item.content}</p>
    </div>
  );
}

export default function Reviews() {
  return (
    <ul className={styles.container}>
      {mock.reviews.map((item) => {
        return (
          <li key={item.id}>
            <Review item={item} />
          </li>
        );
      })}
    </ul>
  );
}
