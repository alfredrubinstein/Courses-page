import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styles from './contact.module.css';
import FormHeader from '../../Components/FormComponents/FormHeader/FormHeader';
import FormInput from '../../Components/FormComponents/FormInput/FormInput';
import FormSubmitButton from '../../Components/FormComponents/FormSubmitButton/FormSubmitButton';

export default function Contact() {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    // agregar aquí para manejar el envío del formulario, como enviar los datos a un servidor.
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        <FormHeader type="contact" />
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          <FormInput type="text" title="Name" placeholder="Enter your name" name="name" />
          <FormInput type="email" title="Email" placeholder="Enter your email" name="email" />
          <FormInput type="text" title="Subject" placeholder="Enter the subject" name="subject" />
          <FormInput type="textarea" title="Message" placeholder="Enter your message" name="message" />
          <FormSubmitButton />
        </form>
      </div>
    </FormProvider>
  );
}
