import React from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import Rating from '../components/Rating';
import styles from './Reviews.module.scss';
import mock from '../dummy/reviews.json';
const { reviews } = mock;

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`;
}

function ReviewListItem({ review, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(review.id);
  };
  return (
    <div className={styles.reviewListItem}>
      <h1>{review.title}</h1>
      <Rating value={review.rating} />
      <p>{formatDate(review.createdAt)}</p>
      <p>{review.content}</p>
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

export default function Reviews({ reviews, onDelete }) {
  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <ReviewListItem item={review} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
