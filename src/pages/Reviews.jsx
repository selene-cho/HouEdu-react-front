import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import Rating from '../components/Rating';
import styles from './Reviews.module.scss';
import mock from '../dummy/reviews.json';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item }) {
  return (
    <div className={styles.reviewListItem}>
      <h1>{item.title}</h1>
      <Rating value={item.rating} />
      <p>{formatDate(item.createdAt)}</p>
      <p>{item.content}</p>
    </div>
  );
}

export default function Reviews() {
  return (
    <ul>
      {mock.reviews.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
