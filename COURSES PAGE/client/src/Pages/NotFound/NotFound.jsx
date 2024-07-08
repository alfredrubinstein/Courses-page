import React from "react";
import styles from "./notFound.module.css";
import { useNavigate } from "react-router-dom";

const NotFound = ({ handlerNavigate, errorText }) => {
  const navigate = useNavigate();

  const handlerNav = () => {
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.notFound}>
        הקורס לא נמצא
        <div className={styles.animation}>😢</div>
      </div>
      <div className={styles.back} onClick={handlerNavigate || handlerNav}>
        {errorText || "חזור לדף הראשי"}
      </div>
    </div>
  );
};

export default NotFound;
