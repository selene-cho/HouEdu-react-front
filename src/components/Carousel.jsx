import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

export default function Carousel() {
  // const [currentImg, setCurrentImg] = useState(0);
  // const slideRef = useRef(null);

  // const nextImg = () => {};
  const banners = [
    'https://picsum.photos/600/400',
    'https://picsum.photos/600/400',
    'https://picsum.photos/600/400',
    'https://picsum.photos/600/400',
    'https://picsum.photos/600/400',
    'https://picsum.photos/600/400',
  ];

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.leftArrow}>
          <BsFillArrowLeftCircleFill />
        </button>
        <ul className={styles.carouselList}>
          {banners.map((banners, idx) => (
            <li className={styles.carouselItem} key={idx}>
              <img src={banners} alt="alt" />
            </li>
          ))}
        </ul>
        <button className={styles.rightArrow}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
      <ul className={styles.Nav}>
        {Array.from({ length: banners.length }).map((_, idx) => (
          <li className={styles.navItem} key={idx}>
            <button className={styles.navButton} />
          </li>
        ))}
      </ul>
    </div>
  );
}
