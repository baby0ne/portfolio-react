import React from 'react';
import styles from './LinksImage.module.scss';

type PropsType = {
    link: string
    style: {
        backgroundImage: string
    }
}

export const LinksImage: React.FC<PropsType> = (props) => {
    return <div className={styles.image} style={props.style}>
        <a href={props.link} className={styles.link} target={"_blank"}></a>
    </div>
}