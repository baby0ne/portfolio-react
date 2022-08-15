import React from 'react';
import styles from './Main.module.scss';
import containerStyle from './../../common/styles/Container.module.css';

export const Main: React.FC = () => {
   return <div className={styles.mainBlock}>
      <div className={`${containerStyle.container} ${styles.mainContainer}`}>
         <div className={styles.text}>
            <span>Hi There</span>
            <h1>I am Andrew Ashmianets</h1>
            <p>Frontend Developer</p>
         </div>
         <div className={styles.photo}>

         </div>
      </div>
   </div>
}