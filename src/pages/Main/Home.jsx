import React from 'react';
import Carousel from './Carousel';
import Teachers from './Teachers';

export default function Home() {
  return (
    <div>
      <Carousel />
      <p>강의목록</p>
      <Teachers />
    </div>
  );
}
