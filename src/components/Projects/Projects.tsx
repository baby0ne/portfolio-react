import React from 'react';
import styles from './Projects.module.scss';
import containerStyle from './../../common/styles/Container.module.css';
import {Project} from './Project/Project';
import {Title} from '../../common/components/title/Title';
import todolistImage from './../../assets/image/todolist.jpg';
import cardTrainingImage from './../../assets/image/cardTraining.jpg';
import {Fade} from 'react-awesome-reveal';

export const Projects: React.FC = () => {
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }

    const cardTraining = {
        backgroundImage: `url(${cardTrainingImage})`
    }

    return <div className={styles.projectsBlock} id={'projects'}>
        <div className={`${containerStyle.container} ${styles.projectsContainer}`}>
            <Title text={'My Projects'}/>
            <div className={styles.projects}>
                <Fade direction={'up'} duration={700} triggerOnce={true}>
                    <Project projectName='Productivity App'
                             link='https://github.com/baby0ne/productivity-app'
                             projectDir='This app is the productivity tool you need to get work and life organized. Collect tasks, organize projects, and plan your day! (React, Redux, React-Hooks, TypeScript, MUI, Formik)'
                             style={todolist}
                    />
                    <Project projectName='Card Training'
                             link='https://github.com/tatiankris/autumn-project'
                             projectDir="Application for learning with cards. The user can create a deck of cards for training himself, or he can use other people's decks. (React, Redux, React-Hooks, TypeScript, MUI, Formik)"
                             style={cardTraining}
                    />
                </Fade>
            </div>
        </div>
    </div>
}