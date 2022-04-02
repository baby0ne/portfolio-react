import React from 'react';
import styles from './Contacts.module.css';
import containerStyle from './../../common/styles/Container.module.css';

export const Contacts: React.FC = () => {
   return <div className={styles.contactsBlock}>
      <div className={`${containerStyle.container} ${styles.contactsContainer}`}>
         <h2 className={styles.title}>Contacts</h2>
         <form className={styles.form} action="">
            <input />
            <input />
            <textarea />
         </form>
         <button className={styles.sendButton}>Send</button>
      </div>
   </div>

}