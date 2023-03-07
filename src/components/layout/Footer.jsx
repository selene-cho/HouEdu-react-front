import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.title}>사업자 정보</div>
        <div className={styles.contents}>
          상호명 : HouEdu
          <br />
          사업자등록번호 : 123-45-67890
          <br />
          통신판매업 신고번호 : 2023-서울-1004호
          <br />
          대표 : 반장님들
          <br />
          주소 : 서울특별시 서초구 강남대로99길 45
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>고객센터</div>
        <div className={styles.contents}>
          <a href="#" target="_blank">
            고객센터 상담톡 바로가기
          </a>
          <br />
          이메일 : kdigital@nextrunners.co.kr
          <br />
          전화 : 070-4099-8219
          <br />
          상담시간 : 평일 10시~17시 (공휴일 휴무)
          <br />
          <a href="#" target="_blank">
            개인정보처리방침 및 이용약관
          </a>
        </div>
      </div>
    </footer>
  );
}
