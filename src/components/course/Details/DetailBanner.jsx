import React from 'react';
import styles from './DetailBanner.module.scss';
import { Link, useParams } from 'react-router-dom';
import mock from '../../../dummy/reviews.json';
import Rating from '../../Rating';

const CoursesReview = ({ item, value }) => {
   console.log(item.star);
   return (
      <>
         <Rating value={value && item.star} />
      </>
   );
};

export default function DetailBanner() {
   const { coursesId } = useParams();
   console.log('id', coursesId);

   // const getRating = () => {
   //    const ratingInfo = mock.find(item => item.id === coursesId);
   //    return ratingInfo ? ratingInfo.rating : null;
   // };

   return (
      <section className={styles.container}>
         <div className={styles.banner}>
            <div className={styles.banner__info}>
               <h3>장인이 알려주는 인테리어와 디자인의 모든 것!</h3>
               <p>장인의 비법을 전수합니다. 소제목</p>
               <p>장인의 실력을 배워 현업에 나가 인테리어의 스킬 업!, 그리고 디자인까지 습득하여 만능의 인테리어인이 되어보아요! 강의소개</p>
               <Link to='/lecture'>
                  <button className={styles.banner_btn}>보러가기</button>
               </Link>
            </div>
            <div className={styles.banner__image}>
               <img className={styles.banner__img} src='../image/Detail-thumbnail.jpeg' />
            </div>
         </div>
      </section>
   );
}
