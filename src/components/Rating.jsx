import React from 'react';
import styles from 'Rating.module.scss';

function Start({ selected = false }) {
  const className = `Rating-star ${selected ? 'selected' : ''}`;
  return <span className={styles.className}>⭐️</span>;
}

export default function Rating({ value = 0 }) {
  return (
    <div>
      <Start selected={value >= 1} />
      <Start selected={value >= 2} />
      <Start selected={value >= 3} />
      <Start selected={value >= 4} />
      <Start selected={value >= 5} />
    </div>
  );
}
