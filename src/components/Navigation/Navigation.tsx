import React from 'react';
import styles from './Navigation.module.scss';


export const Navigation: React.FC = () => {
   return <div className={styles.navigation}>
      <a href='#main'>Main</a>
      <a href='#skills'>Skills</a>
      <a href='#projects'>Projects</a>
      <a href='#contacts'>Contacts</a>
   </div>
}