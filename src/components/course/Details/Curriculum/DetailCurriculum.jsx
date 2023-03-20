import React, { useState } from 'react';
import styles from './DetailCurriculum.module.scss';
import TabMenuHeader from './TabMenuHeader';
import TabMenuContent from './TabMenuContent';
import { tabs } from './tabs';

export default function DetailCurriculum() {
   const [activeTab, setActiveTab] = useState(0);

   const handleTabClick = tabIndex => {
      setActiveTab(tabIndex);
      console.log(tabIndex);
   };

   const activeTabContent = Array.isArray(tabs[activeTab].content) ? tabs[activeTab].content : [{ content: tabs[activeTab].content }];
   console.log(activeTabContent);

   return (
      <div className={styles.curriculum}>
         <div className={styles.tab_menu}>
            <TabMenuHeader tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />
            <div className={styles.content}>
               <TabMenuContent tabs={tabs} activeTab={activeTab} />
            </div>
         </div>

         {/* 탭안 콘텐츠 */}
      </div>
   );
}
