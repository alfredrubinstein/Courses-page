import {React,useState} from 'react'
import styles from "./botomAlert.module.css"
export default function BotomAlert(props) {
  // const [isActive,setIsActive]=useState(true);
  
  
const handlerAccept=()=>{
  // setIsActive(false);
  console.log("ha presionado en aceptar")}
const handlerReject=()=>{
  // setIsActive(false);
  console.log("ha presionado en 'reject'")}
  return (
    <div className={styles.buttonsContiner}>
    <div className={styles.accept}>
    <button onClick={handlerAccept}>✅</button>  
    </div>
    <div className={styles.reject}>
     <button onClick={handlerReject}>🚩</button> 
    </div>
    </div>
  )
}
