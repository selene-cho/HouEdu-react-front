import React from 'react';
import Carousel from './Carousel';
import Teachers from './Teachers';

export default function Home() {
  return (
    <>
      <Carousel />
      <p>강의목록</p>
      <Teachers />
    </>
  );
}
