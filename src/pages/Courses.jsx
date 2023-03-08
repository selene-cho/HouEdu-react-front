import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Courses() {
   const [text, setText] = useState('');
   const navigate = useNavigate(); // 코드상에서 동적으로 이동

   return (
      <>
         <main>
            <section>
               {/* search header */}
               <header></header>
               {/* videos main */}
               <main></main>
            </section>
         </main>
      </>
   );
}
