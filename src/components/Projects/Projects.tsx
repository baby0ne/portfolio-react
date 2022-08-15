import React from 'react';
import styles from './Projects.module.css';
import containerStyle from './../../common/styles/Container.module.css';
import { Project } from './Project/Project';
import { Title } from '../../common/components/title/Title';

export const Projects: React.FC = () => {
   return <div className={styles.projectsBlock}>
      <div className={`${containerStyle.container} ${styles.projectsContainer}`}>
         <Title text={'My Projects'} />
         <div className={styles.projects}>
            <Project projectName='TodoList'
               projectDir='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, facere!' />
            <Project projectName='Social Network'
               projectDir='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi?' />
         </div>
      </div>
   </div>
}