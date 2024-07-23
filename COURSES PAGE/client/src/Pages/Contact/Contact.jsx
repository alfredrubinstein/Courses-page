//formulario
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styles from './contact.module.css';
import FormHeader from '../../Components/FormComponents/FormHeader/FormHeader';
import FormInput from '../../Components/FormComponents/FormInput/FormInput';
import FormButtons from '../../Components/FormComponents/FormButtons/FormButtons';

export default function Contact() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        <FormHeader type="contact" />
        <form className={styles.form}>
          <FormInput type="text" title="Name" placeholder="Enter your name" name="name" />
          <FormInput type="email" title="Email" placeholder="Enter your email" name="email" />
          <FormInput type="text" title="Message" placeholder="Enter your message" name="message" />
          <FormButtons type="contact" />
        </form>
      </div>
    </FormProvider>
  );
}
