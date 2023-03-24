import React, { useState, useEffect } from 'react';
import styles from './DetailBanner.module.scss';
import { Link, useParams } from 'react-router-dom';
import { getCourse } from '../../../../api/api';
import { useQuery } from '@tanstack/react-query';

export default function DetailBanner() {
  const { courseId } = useParams();
  const { data } = useQuery([`courses`, courseId], getCourse);
  console.log('data', data);
  console.log('category', data.category);

  //   const [course, setCourse] = useState([]);

  //   useEffect(() => {
  //     window.scroll(0, 0);
  //     getCourse(coursesId).then((data) => setCourse(data));
  //   }, [coursesId]);
  //   useEffect(() => {
  //     setCourse(data);
  //   }, []);
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.banner__info}>
          <h3>{data?.title}</h3>
          <p>장인의 비법을 전수합니다. 소제목</p>
          <p>
            장인의 실력을 배워 현업에 나가 인테리어의 스킬 업!, 그리고
            디자인까지 습득하여 만능의 인테리어인이 되어보아요! 강의소개
          </p>
          <Link to="/lecture">
            <button className={styles.banner_btn}>보러가기</button>
          </Link>
        </div>
        <div className={styles.banner__image}>
          <img
            className={styles.banner__img}
            src="../image/Detail-thumbnail.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
