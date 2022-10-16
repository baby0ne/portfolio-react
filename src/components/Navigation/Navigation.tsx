import React from 'react';
import styles from './Navigation.module.scss';
import {Link} from "react-scroll";

export const Navigation: React.FC = () => {
    return <div className={styles.navigation}>
        <Link to="main" smooth={true} offset={-80}>Main</Link>
        <Link to="skills" smooth={true} offset={-80}>Skills</Link>
        <Link to="projects" smooth={true} offset={-80}>Projects</Link>
        <Link to="contacts" smooth={true} offset={-80}>Contacts</Link>
    </div>
}