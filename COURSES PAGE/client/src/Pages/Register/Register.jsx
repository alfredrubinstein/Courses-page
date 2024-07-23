import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styles from './register.module.css';
import FormHeader from '../../Components/FormComponents/FormHeader/FormHeader';
import FormInput from '../../Components/FormComponents/FormInput/FormInput';
import FormButtons from '../../Components/FormComponents/FormButtons/FormButtons';

export default function Register() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        <FormHeader type="register" />
        <form className={styles.form}>
          <FormInput type="text" title="Username" placeholder="Enter your username" name="username" />
          <FormInput type="email" title="Email" placeholder="Enter your email" name="email" />
          <FormInput type="password" title="Password" placeholder="Enter your password" name="password" />
         <FormButtons type="register"/>
        </form>
      </div>
    </FormProvider>
  );
}
