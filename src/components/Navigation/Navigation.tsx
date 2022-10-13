import React from 'react';
import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
   return <div className={styles.navigation}>
      <a href="">Главная</a>
      <a href="">Скиллы</a>
      <a href="">Проекты</a>
      <a href="">Контакты</a>
   </div>
}