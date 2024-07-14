import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import Logo from '../../Components/Logo/Logo';
import { AuthContext } from '../../contexts/AuthContext'; // Importa el contexto

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [bypassValidation, setBypassValidation] = useState(false);
  const { login } = useContext(AuthContext); // Usa el contexto

  const onSubmit = async (data) => {
    if (bypassValidation) {
      alert("כניסה ללא אימות");
      navigate("/about");
      return;
    }

    try {
      const response = await axios.post("URL_TO_YOUR_API/register", data);
      login(response.data); // Guarda los datos de autenticación en el contexto
      alert("נרשמת בהצלחה");
      navigate("/about");
    } catch (error) {
      console.error("Error registering:", error);
      alert("שגיאה בהרשמה");
    }
  };

  return (
    <>
      {/* Register Form */}
      <div className={styles.register_form}>
        <div className={styles.divIntermedio}>
          <div className={styles.divInterno}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h6 className={styles.title}>הרשמה למשתמשים חדשים</h6>
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
                <label htmlFor="password">סיסמה</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="הסיסמה שלך"
                  {...register("password", { required: "סיסמה חובה" })}
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>

              <div className={styles.divCheckbox}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  id="bypassValidation"
                  checked={bypassValidation}
                  onChange={() => setBypassValidation(!bypassValidation)}
                />
                <label className="form-check-label" htmlFor="bypassValidation">
                  עקוף אימות
                </label>
              </div>

              <button type="submit" className={styles.btn}>
                הירשם
              </button>

              <button
                type="button"
                className={styles.btn_secondary}
                onClick={() => navigate("/login")}
              >
                יש לך כבר חשבון?
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
