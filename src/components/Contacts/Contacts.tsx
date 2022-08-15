import React from 'react';
import styles from './Contacts.module.css';
import containerStyle from './../../common/styles/Container.module.css';
import { Title } from '../../common/components/title/Title';

export const Contacts: React.FC = () => {
   return <div className={styles.contactsBlock}>
      <div className={`${containerStyle.container} ${styles.contactsContainer}`}>
         <Title text={'Contacts'} />
         <form className={styles.form} action="">
            <input />
            <input />
            <textarea />
         </form>
         <button className={styles.sendButton}>Send</button>
      </div>
   </div>

}