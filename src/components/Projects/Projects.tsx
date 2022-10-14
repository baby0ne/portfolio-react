import React from 'react';
import styles from './Projects.module.scss';
import containerStyle from './../../common/styles/Container.module.css';
import {Project} from './Project/Project';
import {Title} from '../../common/components/title/Title';
import todolistImage from './../../assets/image/todolist.jpg';
import socialImage from './../../assets/image/social.jpg';
import {Fade} from 'react-awesome-reveal';

export const Projects: React.FC = () => {
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }

    const social = {
        backgroundImage: `url(${socialImage})`
    }

    return <div className={styles.projectsBlock} id={'projects'}>
        <div className={`${containerStyle.container} ${styles.projectsContainer}`}>
            <Title text={'My Projects'}/>
            <div className={styles.projects}>
                <Fade direction={'up'} duration={700} triggerOnce={true}>
                    <Project projectName='TodoList'
                             projectDir='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, facere!'
                             style={todolist}
                    />
                    <Project projectName='Social Network'
                             projectDir='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. A, modi?'
                             style={social}
                    />
                </Fade>
            </div>
        </div>
    </div>
}