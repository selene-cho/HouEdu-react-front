import React, { useState } from 'react';
import data from '../../dummy/data.json';
import styles from './SearchCourse.module.scss';

export default function Search() {
   console.log(data);
   // 사용자가 검색한 키워드
   const [text, setText] = useState('');

   const handleSubmit = e => {
      e.preventDefault();
   };

   const handleChange = e => {
      console.log(e);
      setText(e.target.value);
   };

   const handleClick = e => {
      console.log(e);
   };

   return (
      <>
         <div className={styles.container}>
            <form onSubmit={handleSubmit}>
               <input type='text' placeholder='검색어를 입력하세요' onChange={handleChange} value={text} />
               <button type='button' onClick={handleClick}>
                  검색
               </button>
            </form>
         </div>
      </>
   );
}
