import React from 'react';
import styles from './Project.module.css';

type propsType = {
   projectName: string
   projectDir: string
}

export const Project: React.FC<propsType> = (props) => {
   return <div className={styles.skill}>
      <div className={styles.image}>
         <a href="#" className={styles.link}></a>
      </div>
      <div className={styles.projectDir}>
         <h3>{props.projectName}</h3>
         <p>{props.projectDir}</p>
      </div>
   </div>

}