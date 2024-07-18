import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import Logo from '../../Components/Logo/Logo';
import { AuthContext } from '../../contexts/AuthContext';
import Modal from '../../Components/Modal/Modal';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [bypassValidation, setBypassValidation] = useState(false);
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    if (bypassValidation) {
      alert("כניסה ללא אימות");
      navigate("/about");
      return;
    }

    try {
      const response = await axios.post("URL_TO_YOUR_API/login", data);
      login(response.data);
      alert("נכנסת בהצלחה");
      navigate("/about");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("שגיאה בכניסה");
    }
  };

  return (
    <>
    <Modal text="hola estamos arreglando la pagina disculpe las molestias que esto pueda ocasionar" type="classic"/>
      {/* Login Form */}
      <div className={styles.loginForm}>
        <div className={styles.divIntermedio}>
          <div className={styles.divInterno}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6>כניסה למשתמשים רשומים</h6>
              <div className={styles.logoContainer}>
                <Logo />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="name">שם</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="השם שלך"
                  {...register("name", { required: "שם חובה" })}
                />
                {errors.name && <span>{errors.name.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">אמייל</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="האמייל שלך"
                  {...register("email", { required: "אמייל חובה" })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div className={styles.formGroup}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="bypassValidation"
                  checked={bypassValidation}
                  onChange={() => setBypassValidation(!bypassValidation)}
                />
                <label className={styles.formLabelCheckbox} htmlFor="bypassValidation">
                  עקוף אימות
                </label>
              </div>

              <button type="submit" className={styles.btn}>
                הכנס
              </button>

              <button
                type="button"
                className={styles.btnSecondary}
                onClick={() => navigate("/register")}
              >
                משתמש חדש
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
