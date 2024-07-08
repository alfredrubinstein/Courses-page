import React from 'react'
import styles from './modal.module.css'
import Exit from '../Buttons/Exit/Exit'
import Reject from '../Buttons/Reject/Reject'
import Accept from '../Buttons/Accept/Accept'

export default function Modal(props) {
  return (
    <>
    {props.text &&
        <div className={styles.modalContainer}>
            {props.type==='exit' && <Exit/>}
        <div className={styles.modalInterno}>
        {props.text}
        {props.type==='accept' && <Accept/>}
        {props.type==='reject' && <Reject/>}
        </div>
        </div>
    }
    </>
  )
}
