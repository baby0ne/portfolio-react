import React from 'react';
import styles from './Footer.module.css';
import containerStyle from './../../common/styles/Container.module.css';

export const Footer: React.FC = () => {
   return <div className={styles.footerBlock}>
      <div className={`${containerStyle.container} ${styles.footerContainer}`}>
         <h2 className={styles.title}>Andrei Ashmainets</h2>
         <div className={styles.storage}>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
            <div className={styles.square}></div>
         </div>
         <p className={styles.copyRight}>
            © 2022 All rights reserved
         </p>
      </div>
   </div>

}