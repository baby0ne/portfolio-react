import React from 'react';
import styles from './Skills.module.css';
import containerStyle from './../../common/styles/Container.module.css';
import { Skill } from './Skill/Skill';
import { Title } from '../../common/components/title/Title';
import htmlCssImage from './../../assets/image/html_css.png';
import jsTsImage from './../../assets/image/js_ts.png';
import reactImage from './../../assets/image/react.png';

export const Skills: React.FC = () => {
   const htmlCss = {
      backgroundImage: `url('${htmlCssImage}')`
   }

   const jsTs = {
      backgroundImage: `url('${jsTsImage}')`
   }

   const react = {
      backgroundImage: `url('${reactImage}')`
   }

   return <div className={styles.skillsBlock}>
      <div className={`${containerStyle.container} ${styles.skillsContainer}`}>
         <Title text={'My Skills'} />
         <div className={styles.skills}>
            <Skill title='HTML/CSS'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet aliquid, suscipit cupiditate officiis quo quae animi qui corporis! Odit.'
               style={htmlCss}
            />
            <Skill title='JS/TS'
               description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam mollitia nisi ad accusamus. Ad adipisci porro molestias ullam dolores nobis?'
               style={jsTs}
            />
            <Skill title='React'
               description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, ipsum fugiat quia minima numquam repellendus nostrum mollitia repellat optio vero?'
               style={react}
            />
         </div>
      </div>
   </div>

}