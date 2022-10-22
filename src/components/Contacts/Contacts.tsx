import React, {KeyboardEvent} from 'react';
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
            axios.post('https://gmail-smtp-andreka.herokuapp.com/sendMessage', values)
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

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        if (e.key === 'Enter') {
            formik.handleSubmit()
        }
    }

    return <div className={styles.contactsBlock} id={'contacts'}>
        <div className={`${containerStyle.container} ${styles.contactsContainer}`}>
            <Title text={'Contacts'}/>
            <form className={styles.form} onSubmit={formik.handleSubmit}>
                <Fade direction={'up'} duration={700} triggerOnce={true}>
                    <input className={styles.formControl}
                           placeholder={'Name'}
                           {...formik.getFieldProps('name')}
                           onKeyPress={onKeyPressHandler}
                           required/>
                    <input className={styles.formControl}
                           placeholder={'E-Mail'}
                           {...formik.getFieldProps('email')}
                           onKeyPress={onKeyPressHandler}
                           required/>
                    <textarea className={styles.formControl}
                              placeholder={'Your message'}
                              {...formik.getFieldProps('message')}
                              onKeyPress={onKeyPressHandler}
                              required/>
                    <button className={styles.sendButton} type={'submit'}>Send</button>
                </Fade>
            </form>
        </div>
    </div>
}
