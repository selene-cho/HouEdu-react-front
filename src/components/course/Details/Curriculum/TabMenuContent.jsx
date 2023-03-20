import React from 'react';
import styles from './DetailCurriculum.module.scss';

export default function TabMenuContent({ tabs, activeTab }) {
   const activeTabContent = // 배열인지를 체크 이미 배열인 경우 그대로,
      Array.isArray(tabs[activeTab].content) ? tabs[activeTab].content : [{ content: tabs[activeTab].content }];

   return (
      <>
         {activeTabContent.map((item, index) => (
            <ul key={index}>
               <li className={styles.tab_content}>{item.content}</li>
            </ul>
         ))}
      </>
   );
}
