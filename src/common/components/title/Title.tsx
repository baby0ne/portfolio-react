import React from 'react';
import styles from './Title.module.css';

type propsType = {
   text: string
}

export const Title: React.FC<propsType> = (props) => {
   return <div className={styles.title}>
      <h2>{props.text}</h2>
   </div>
}