import React from 'react';
import styles from './Main.module.scss';
import containerStyle from './../../common/styles/Container.module.css';
import {Particle} from "../../common/components/particles/Particle";

export const Main: React.FC = () => {
    return <div className={styles.mainBlock}>
        <Particle/>
        <div className={`${containerStyle.container} ${styles.mainContainer}`}>
            <div className={styles.text}>
                <span>Hi There</span>
                <h1>I am <span className={styles.name}>Andrew Ashmianets</span></h1>
                <p>Frontend Developer</p>
            </div>
            <div className={styles.photo}>
                <div className={styles.image}>

                </div>
            </div>
        </div>
    </div>
}