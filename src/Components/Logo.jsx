import React from 'react'
// Double check if your folder is "assets" (lowercase) or "Assets" (uppercase)
import LogoImg from "./Assets/Logo1.png"
// import styles from "../CSS/Logo.module.css"


const Logo = () => {
  return (
    <>
       <img 
      src={LogoImg} 
      alt="QTify Logo" 
      width={67} 
      style={{ display: "block" }} 
    />
    </>
  )
}

export default Logo
