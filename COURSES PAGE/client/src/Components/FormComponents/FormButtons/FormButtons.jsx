import React from 'react';
import { useFormContext } from 'react-hook-form';
import styles from "./formButtons.module.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function FormButtons(props) {
  const { type } = props;
  const { handleSubmit } = useFormContext();
  const navigate = useNavigate();
  
  const onSubmit = async (data) => {
    try {
      let response;
      switch (type) {
        case 'login':
          response = await axios.get('http://localhost:5000/users', {
            params: {
              username: data.username,
              password: data.password
            }
          });
          // console.log('response', response.data[0]);
          // console.log('data de formulario',data)
          if (response?.data[0]?.username===data.username && response?.data[0]?.password===data.password) {
            console.log('login exitoso');
            navigate('/about');
          } else {
            console.log('Login fallido');
            navigate('/login');
          }
          break;
        case 'register':
          response = await axios.get('http://localhost:5000/users', {
            params: {
              username: data.username,
              email: data.email
            }
          });
          // console.log('response', response.data[0]);
          // console.log('data de formulario',data)
          if (response?.data[0]?.username===data.username || response?.data[0]?.email===data.email) {
            console.log('Usuario o email existentes');
            navigate('/register');//revisar arreglar que se reinicie el formulario
          } else {
            response = await axios.post('http://localhost:5000/users', data);
            if (response.data) {
              console.log('Registro exitoso:', response.data);
              navigate('/about');
            } else {
              if (response.request) {
                console.error('Error de conexión, revisa que el servidor funcione en el puerto 5000:', response.request);
              }
              if (response.response) {
                console.error('Error del Servidor:', response.response.data);
              }
            }
          }
          break;
        case 'contact':
          response = await axios.post('http://localhost:5000/contacts', data);
          //revisar agregar aqui make para mandar mails
          break;
        default:
          console.error('Tipo de formulario no válido:', type);
          break;
      }
    } catch (error) {
      if (error.response) {
        console.error('Error del Servidor:', error.response.data);
      } else if (error.request) {
        console.error('Error de Red:', error.request);
      } else {
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
              ¿No tienes una cuenta? <span className={styles.link}>
                <Link to="/register">Regístrate</Link>
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
              Registrar
            </button>
            <p className={styles.text}>
              ¿Ya tienes una cuenta? <span className={styles.link}>
                <Link to="/login">Inicia sesión</Link>
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
              Enviar
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
