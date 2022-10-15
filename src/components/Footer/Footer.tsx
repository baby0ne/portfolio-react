import React from 'react';
import styles from './Footer.module.scss';
import containerStyle from './../../common/styles/Container.module.css';
import vkImage from './../../assets/image/free-icon-vkontakte-4494517.png';
import telegramImage from './../../assets/image/free-icon-telegram-2111646.png';
import inImage from './../../assets/image/free-icon-linkedin-145807.png';
import instImage from './../../assets/image/free-icon-instagram-4494488.png';
import {LinksImage} from "../../common/components/linksImage/LinksImage";
import {Fade} from 'react-awesome-reveal';

export const Footer: React.FC = () => {
   const vk = {
      backgroundImage: `url(${vkImage})`
   }
   const inst = {
      backgroundImage: `url(${instImage})`
   }
   const linkedIn = {
      backgroundImage: `url(${inImage})`
   }
   const telegram = {
      backgroundImage: `url(${telegramImage})`
   }

   return <div className={styles.footerBlock}>
      <div className={`${containerStyle.container} ${styles.footerContainer}`}>
         <Fade direction={'up'} duration={700} triggerOnce={true}>
         <h2 className={styles.title}>Andrew Ashmainets</h2>
         <div className={styles.storage}>
            <LinksImage style={vk} link={'https://vk.com/andruha_official'}/>
            <LinksImage style={inst} link={'https://www.instagram.com/andruhaofficial/?next=%2F'}/>
            <LinksImage style={linkedIn} link={'https://www.linkedin.com/in/andrei-ashmianets/'}/>
            <LinksImage style={telegram} link={'https://t.me/andruhaofficial'}/>
         </div>
         <p className={styles.copyRight}>
            © 2022 All rights reserved
         </p>
            </Fade>
      </div>
   </div>

}