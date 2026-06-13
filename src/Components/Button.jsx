import React from 'react'
import styles from "../Components/CSS/Button.module.css"

function Button({btn}) {
  return (
    <>
      <button className={styles.button} type='submit'>{btn}</button>
    </>
  )
}

export default Button;
