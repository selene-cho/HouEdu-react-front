import styles from './ReviewNotFound.module.scss';

export default function ReviewNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>강의 구매 내역이 없어 리뷰 작성이 불가능합니다 🥲</h1>
        <div>
          <span className={styles.logo}>HouEdu</span> 와 함께 '실내
          건축∙인테리어 전문가'가 되어보세요 ☺️
        </div>
      </div>
    </div>
  );
}
