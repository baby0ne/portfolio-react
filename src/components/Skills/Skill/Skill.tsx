import React from 'react';
import styles from './Skill.module.css';

type PropsType = {
   title: string
   description: string
}

export const Skill: React.FC<PropsType> = (props) => {
   return <div className={styles.skill}>
      <div className={styles.icon}>
         
      </div>
      <h3>{props.title}</h3>
      <span className={styles.description}>
         {props.description}
      </span>
   </div>
}