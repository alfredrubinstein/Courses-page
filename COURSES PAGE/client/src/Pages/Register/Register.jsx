// revisar hacer que esto use useform -usar axios para enviar el contenido rellenado
import React from "react";
import ContactHeader from "../../Images/7.jpg";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import Logo from "../../Components/Logo/Logo";

const Register = ({ onLogin }) => {
  const navigate = useNavigate();
  const handleRegister = () => {
    alert("נרשמת בהצלחה");
    navigate("/about");
  };

  return (
    <>
      {/* <div className={styles.contact}>
        <img src={ContactHeader} alt="Contact Header" />
      </div> */}

      {/* Register Form */}
      <div className={`${styles.register_form} container`}>
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <form action="">
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
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">אמייל</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="האמייל שלך"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">סיסמה</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="הסיסמה שלך"
                  required
                />
              </div>

              <button
                type="submit"
                className={styles.btn}
                onClick={handleRegister}
              >
                הירשם
              </button>
              <button
                type="button"
                className={styles.btn}
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
