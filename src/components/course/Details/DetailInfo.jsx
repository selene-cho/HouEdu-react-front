import React from 'react';
import styles from './DetailInfo.module.scss';

export default function DetailInfo() {
   return (
      <section className={styles.container}>
         <header className={styles.header}>
            <nav className={styles.nav}>
               <ul className={styles.nav_list}>
                  <li>소개</li>
                  <li>커리큘럼</li>
                  <li>강의평</li>
               </ul>
            </nav>
         </header>
         {/* header 끝 */}
         <div className={styles.top_content}>
            <div className={styles.content}>
               {/* 좌측 */}
               <div className={styles.left_content}>
                  <div>
                     <p>인테리어 장인이 준비한</p>
                     <p>
                        <strong>디자인</strong>강의입니다.
                     </p>
                     <p>장인의 팁이 담겨있어요</p>
                  </div>
               </div>
               {/* 우측 */}
               <div className={styles.right_content}>
                  <div className={styles.right}>
                     <div className={styles.right_img}>
                        <img src='../image/Coursethumbnail-1.png' />
                     </div>
                     <div className={styles.right_info}>
                        <p>이름</p>
                        <p>강사소개</p>
                     </div>
                  </div>

                  <div className={styles.right_bottom}>
                     <ul>
                        <span>강사 이력</span>
                        <li>현| 삼성</li>
                        <li>전| 현대</li>
                        <li>전| 스타트업</li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* 하단 */}
            <div className={styles.bottom_content}>
               <div className={styles.title}>구성: 인테리어 팁</div>
               <div className={styles.content_list}>
                  <p>이런걸 배워요</p>
                  <div>
                     <ul className={styles.content_item}>
                        <li> &nbsp; 인테리어</li>
                        <li> &nbsp; 실내디자인</li>
                        <li> &nbsp; 현장작업</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
