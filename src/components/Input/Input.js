import React from 'react';
import styles from "./Input.module.css";

export const Input = (props) => {
  return (
    <div className={styles["Input-wrap"]}>
      <input {...props} autoComplete="off" />
    </div>
  )
}