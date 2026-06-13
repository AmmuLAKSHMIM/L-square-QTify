import React from 'react'
 import LogoImg from "./Assets/Logo1.png"
// import styles from "../CSS/Logo.module.css"


const Logo = () => {
  return (
    <>
    <div style={{ display: "flex", alignItems: "center"}}>
       <img 
      src={LogoImg} 
      alt="QTify Logo" 
      width={67} 
      style={{ display: "block" }} 
    />
    </div>
    </>
  )
}

export default Logo
