import React from 'react';

export default function Modal({ onClose, onSubmit }) {
    const 
   return (
      <div className={styles.modal}>
         <h2>사용자 인증</h2>
         <p>인증을 받으시겠습니까?</p>
         <div className={styles.modal__buttons}>
            <button onClick={handleAuthenticate}>인증</button>
            <button onClick={onClose}>취소</button>
         </div>
      </div>
   );
}
