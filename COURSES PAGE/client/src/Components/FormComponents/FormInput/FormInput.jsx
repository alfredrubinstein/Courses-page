//formulario input unico
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from "./formInput.module.css";

export default function FormInput(props) {
  const { type, title, placeholder, name } = props;
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{title}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        {...register(name, { required: true })} 
        className={styles.input} 
      />
      {errors[name] && <p className={styles.error}>This field is required</p>}
    </div>
  );
}

