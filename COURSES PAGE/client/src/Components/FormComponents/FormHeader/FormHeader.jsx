import React from 'react';
import styles from "./formHeader.module.css"; 
import Logo from '../../Logo/Logo';

export default function FormHeader(props) {
  const { type } = props;

  return (
    <div className={styles.container}>
     {(type==="login" || type==="register" )&& <Logo />} 
      <h1 className={styles.header}>{(type === "login" )? "Login" : (type=== "register") ?"Register":"צור איתנו קשר"}</h1>
    </div>
  );
}
