import React from 'react';
import styles from './Skills.module.scss';
import containerStyle from './../../common/styles/Container.module.css';
import {Skill} from './Skill/Skill';
import {Title} from '../../common/components/title/Title';
import htmlCssImage from './../../assets/image/html_css.png';
import jsTsImage from './../../assets/image/js_ts.png';
import reactImage from './../../assets/image/react.png';
import {Fade} from "react-awesome-reveal";

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

    return <div className={styles.skillsBlock} id={'skills'}>
        <div className={`${containerStyle.container} ${styles.skillsContainer}`}>
            <Title text={'My Skills'}/>
            <div className={styles.skills}>
                <Fade direction={'up'} duration={700} triggerOnce={true}>
                    <Skill title='React'
                           description='JavaScript library for creating user interfaces. React can be considered the best alternative among web development tools.'
                           style={react}
                    />
                    <Skill title='JS/TS'
                           description='TypeScript extends JavaScript by adding types to the language. TypeScript speeds up your development experience by catching errors and providing fixes before you even run your code.'
                           style={jsTs}
                    />
                    <Skill title='HTML/CSS'
                           description='HTML and CSS are languages that no website can do without. HTML is responsible for the text content and structure, while CSS is responsible for the appearance.'
                           style={htmlCss}
                    />
                </Fade>
            </div>
        </div>
    </div>

}