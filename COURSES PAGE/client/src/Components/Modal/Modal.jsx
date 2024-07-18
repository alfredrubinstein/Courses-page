import React from "react";
import {useState}from "react";
import styles from "./modal.module.css";
import Logo from "../../Components/Logo/Logo"
// import Exit from "../Buttons/Exit/Exit";
// import Reject from "../Buttons/Reject/Reject";
// import Accept from "../Buttons/Accept/Accept";
import BotomAlert from "../BotomAlert/BotomAlert";
export default function Modal(props) {
  const [isActive,setIsActive]=useState(true);
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
              <botton onClick={handleExit}>✨</botton>
            </div>
          <div className={styles.logo}><Logo/></div>
            <div className={styles.ModalTitle}></div>
            {/* {props.type === "exit" && <Exit />} */}
          </div>
          <div className={styles.modalInterno}>
            {props.text}
            {/* {props.type === "accept" && <Accept />}
            {props.type === "reject" && <Reject />} */}
            <div className={styles.botomContainer}>
              {props.type === "classic" && <BotomAlert type="doubleButton" onClick={handleExit}/>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
