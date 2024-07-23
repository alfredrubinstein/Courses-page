//forma de usar el component:
  //  <Modal text="hola" type="onlyExit" active='isActive'/> 
  //    <Modal text="como estas" type="onlyAccept" active='isActive'/> 
  //    <Modal text="que estas haciendp" type="doubleButton" active='isActive'/> 
import React from "react";
import {useState}from "react";
import styles from "./modal.module.css";
import Logo from "../../Components/Logo/Logo"
import BotomAlert from "../BotomAlert/BotomAlert";

export default function Modal(props) {
  const { type, text } = props;
  const [isActive,setIsActive]=useState(true);
 
  const handleAccept = () => {
    console.log("Ha presionado en aceptar");
    setIsActive(false);

  };

  const handleReject = () => {
    console.log("Ha presionado en negar");
    setIsActive(false);

  };
 
  const handleExit = () => {
    console.log("ha presionado en exit");
    setIsActive(false);
  };
  
  return (
    <>
      {(props.text && isActive) && (
        <div className={styles.modalContainer}>
          <div className={styles.modalTitleContiner}>
            <div className={styles.salir}>
              <botton onClick={handleExit}>X</botton>
            </div>
          <div className={styles.logo}><Logo/></div>
            <div className={styles.ModalTitle}></div>
          </div>
          <div className={styles.modalInterno}>
            {text}
            <div className={styles.botomContainer}>
              {type && <BotomAlert type={type}  onAccept={handleAccept} onReject={handleReject}/>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
