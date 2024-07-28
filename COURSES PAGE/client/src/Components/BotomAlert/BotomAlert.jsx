//forma de usar el component:
//<BotomAlert type="doubleButton" onAccept={handlerAccept} onReject={handlerReject} />
//<BotomAlert type="onlyAccept" onAccept={handlerAccept} />
//<BotomAlert type="onlyExit"  />
import React from 'react';
import styles from "./botomAlert.module.css";


export default function BotomAlert(props) {
  const { type, onAccept, onReject } = props;
  
  const handlerAccept = () => {
    onAccept();
    console.log("ha presionado en aceptar");
  };
  
  const handlerReject = () => {
    onReject();
    console.log("ha presionado en 'reject'");
  };
  
  return (
    <>
      {type === "doubleButton" && (
        <div className={styles.buttonsContiner}>
          <div className={styles.accept}>
            <button onClick={handlerAccept}>✅</button>  
          </div>
          <div className={styles.reject}>
            <button onClick={handlerReject}>🚩</button> 
          </div>
        </div>
      )}
      {type === "onlyAccept" && (
        <div className={styles.singleButton}>
          <button onClick={handlerAccept}>✅</button>
        </div>
      )}
      {type === "onlyExit" && (
        <div className={styles.singleButton}>
        </div>
      )}
    </>
  );
}
