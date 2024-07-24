//formulario
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from "./formButtons.module.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function FormButtons(props) {
  const { type } = props;
  const { handleSubmit } = useFormContext();


  const onSubmit = async (data) => {
    try {
      let response;
      switch (type) {
        case 'login':
          response = await axios.post('http://localhost:5000/api/login', data);
          console.log('Respuesta de Login:', response);
          break;
        case 'register':
          response = await axios.post('http://localhost:5000/api/register', data);
          console.log('Respuesta de Registro:', response);
          break;
        case 'contact':
          response = await axios.post('http://localhost:5000/api/contact', data);
          console.log('Respuesta de Contacto:', response);
          break;
        default:
          break;
      }
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un estado fuera del rango 200
        console.error('Error del Servidor:', error.response.data);
      } else if (error.request) {
        // La solicitud se realizó pero no se recibió respuesta
        console.error('Error de Red:', error.request);
      } else {
        // Algo más causó el error
        console.error('Error:', error.message);
      }
    }
  };
  

  const renderButtons = (type) => {
    switch (type) {
      case 'login':
        return (
          <>
            <button 
              type="button" 
              className={styles.button} 
              onClick={handleSubmit(onSubmit)}
            >
              Login
            </button>
            <p className={styles.text}>
              Don't have an account? <span className={styles.link}>
                <Link to="/register">Register</Link>
              </span>
            </p>
          </>
        );
      case 'register':
        return (
          <>
            <button 
              type="button" 
              className={styles.button} 
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </button>
            <p className={styles.text}>
              Already have an account? <span className={styles.link}>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </>
        );
      case 'contact':
        return (
          <>
            <button 
              type="button" 
              className={styles.button} 
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </>
        );        
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {renderButtons(type)}
    </div>
  );
}
