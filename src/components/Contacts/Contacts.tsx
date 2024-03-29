import React from 'react';
import styles from './Contacts.module.scss';
import containerStyle from './../../common/styles/Container.module.css';
import {Title} from '../../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import {useFormik} from "formik";
import axios from "axios";
import Swal from 'sweetalert2';

export const Contacts: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: values => {
            axios.post('https://git.heroku.com/gmail-smtp-andreka.git/sendMessage', values, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    Swal.fire(
                        'Thanks for the feedback!',
                        'You will get an answer soon!',
                        'success'
                    )
                })
                .catch(err => {
                    Swal.fire({
                        title: 'Oops...Something went wrong.',
                        text: `Error: ${err.message}`,
                        icon: 'error',
                    })
                })

            formik.resetForm();
        },
    });

    return <div className={styles.contactsBlock} id={'contacts'}>
        <div className={`${containerStyle.container} ${styles.contactsContainer}`}>
            <Title text={'Contacts'}/>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <Fade direction={'up'} duration={700} triggerOnce={true}>
                    <input className={styles.formControl}
                           placeholder={'Name'}
                           {...formik.getFieldProps('name')}
                           required/>
                    <input className={styles.formControl}
                           placeholder={'E-Mail'}
                           {...formik.getFieldProps('email')}
                           required/>
                    <textarea className={styles.formControl}
                              placeholder={'Your message'}
                              {...formik.getFieldProps('message')}
                              required/>
                    <button className={styles.sendButton} type={'submit'}>Send</button>
                </Fade>
            </form>
        </div>
    </div>
}
