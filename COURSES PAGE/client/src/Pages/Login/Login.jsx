import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import styles from './login.module.css';
import FormButtons from '../../Components/FormComponents/FormButtons/FormButtons';
import FormHeader from '../../Components/FormComponents/FormHeader/FormHeader';
import FormInput from '../../Components/FormComponents/FormInput/FormInput';
import FormSubmitButton from '../../Components/FormComponents/FormSubmitButton/FormSubmitButton';

export default function Login() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        <FormHeader type="login" />
        <form className={styles.form}>
          <FormInput type="text" title="Username" placeholder="Enter your username" name="username" />
          <FormInput type="password" title="Password" placeholder="Enter your password" name="password" />
          <FormSubmitButton />
        </form>
      </div>
    </FormProvider>
  );
}
