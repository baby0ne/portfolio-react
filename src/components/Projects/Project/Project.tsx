import React from 'react';
import styles from './Project.module.scss';

type propsType = {
   projectName: string
   projectDir: string
   style: {
      backgroundImage: string
   }
}

export const Project: React.FC<propsType> = (props) => {
   return <div className={styles.project}>
      <div className={styles.image} style={props.style}>
         <a href="#" className={styles.link}></a>
      </div>
      <div className={styles.projectDescription}>
         <h3 className={styles.projectName}>{props.projectName}</h3>
         <p className={styles.projectDir}>{props.projectDir}</p>
      </div>
   </div>
}