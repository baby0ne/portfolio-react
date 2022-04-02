import React from 'react';
import styles from './Skills.module.css';
import containerStyle from './../../common/styles/Container.module.css';
import { Skill } from './Skill/Skill';

export const Skills: React.FC = () => {
   return <div className={styles.skillsBlock}>
      <div className={`${containerStyle.container} ${styles.skillsContainer}`}>
         <h2 className={styles.title}>My Skills</h2>
         <div className={styles.skills}>
            <Skill title='HTML/CSS'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet aliquid, suscipit cupiditate officiis quo quae animi qui corporis! Odit.' />
            <Skill title='JS/TS'
               description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam mollitia nisi ad accusamus. Ad adipisci porro molestias ullam dolores nobis?' />
            <Skill title='React'
               description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ipsum fugiat quia minima numquam repellendus nostrum mollitia repellat optio vero?' />
         </div>
      </div>
   </div>

}