import React from 'react';
import styles from './Contacts.module.scss';
import containerStyle from './../../common/styles/Container.module.css';
import {Title} from '../../common/components/title/Title';

export const Contacts: React.FC = () => {
    return <div className={styles.contactsBlock}>
        <div className={`${containerStyle.container} ${styles.contactsContainer}`}>
            <Title text={'Contacts'}/>
            <form className={styles.form} action="">
                    <input className={styles.formControl}
                           placeholder={'Name'}
                           required/>
                    <input className={styles.formControl}
                           placeholder={'E-Mail'}
                           required/>
                    <textarea className={styles.formControl}
                              placeholder={'Your message'}
                              required/>
                <button className={styles.sendButton}>Send</button>
            </form>

        </div>
    </div>

}