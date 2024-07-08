import React from 'react'
import { NavLink } from "react-router-dom";
import styles from './LinkComponent.module.css'

export default function LinkComponent(props) {
  return (
    <div>
      <NavLink className={styles.linkStyle} to={props.to}>{props.name}</NavLink>
    </div>
  )
}
