import React from 'react';
import styles from './Main.module.scss';
import containerStyle from '../../common/styles/Container.module.css';
import {Particle} from '../../common/components/particles/Particle';
import {Fade} from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
    return <div className={styles.mainBlock} id={'main'}>
        <div className={`${containerStyle.container} ${styles.mainContainer}`}>
            <Particle/>
            <Fade direction={'up'} duration={700} triggerOnce={true}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>I am <span className={styles.name}>Andrew Ashmianets</span></h1>
                    <ReactTypingEffect
                        className={styles.typingText}
                        text={['Frontend Developer.', 'React Developer.']}
                        speed={100}
                    />
                </div>
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
                    <div className={styles.photo}>
                        <div className={styles.image}></div>
                    </div>
                </Tilt>
            </Fade>
        </div>
    </div>
}