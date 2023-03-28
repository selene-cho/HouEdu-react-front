import React, { useState } from 'react';
import styles from './DetailBanner.module.scss';
import { Link } from 'react-router-dom';
import { useCourse } from '../../../hooks/useCourse';
import useUser from '../../../hooks/useUser';
import { postCourse } from '../../../../api/api';

export default function DetailBanner() {
  const { data } = useCourse();
  const { isLoggedIn } = useUser();
  const [showModal, setShowModal] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (data?.id) {
      await postCourse(data.id);
      setShowModal(false);
    }
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleLoginClick = () => {
    handleModalOpen();
  };

  const handleConfirm = () => {
    window.location.href = '/login';
  };

  const handleCancel = () => {
    handleModalClose();
  };

  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.banner__info}>
          <h3>{data?.crs_name}</h3>
          <p>{data?.crs_goal}</p>
          <p>{data?.crs_info}</p>

          {/* login일때 */}
          {isLoggedIn && (
            <div>
              <button onClick={handleModalOpen} className={styles.banner_btn}>
                보러가기
              </button>

              {/* 모달 */}
              {showModal && (
                <div className={styles.modal}>
                  <div className={styles.modal__content}>
                    <h2>인증 등록</h2>
                    <p>내 강의실로 이동하시겠습니까?</p>
                    <form onSubmit={handleOnSubmit}>
                      <button type="submit">예</button>
                    </form>
                    <button onClick={handleModalClose}>아니오</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 로그인아닐때 */}
          {!isLoggedIn && (
            <button onClick={handleLoginClick} className={styles.banner_btn}>
              로그인
            </button>
          )}
        </div>
        <div className={styles.banner__image}>
          <img
            className={styles.banner__img}
            src={data?.thumbnail}
            alt={data?.id}
          />
        </div>
      </div>

      {/* 경고 모달 */}
      {!isLoggedIn && showModal && (
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <h2>경고</h2>
            <p>
              로그인이 필요한 서비스입니다. <br />
              로그인 페이지로 이동하시겠습니까?
            </p>
            <button onClick={handleConfirm}>예</button>
            <button onClick={handleCancel}>아니오</button>
          </div>
        </div>
      )}
    </section>
  );
}
