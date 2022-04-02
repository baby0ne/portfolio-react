import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.css';

export const Header: React.FC = () => {
   return <div className={styles.header}>
      <Navigation />
   </div>
}