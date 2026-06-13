import React from 'react'
import HeroImg from "./Assets/Hero.png";
import styles from "../Components/CSS/Hero.module.css"

const Hero = () => {
  return (
    <>
      <section className={styles.heroContainer}>
      <div className={styles.textWrapper}>
        {/* The text inside here must match case-insensitively */}
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        {/* The image inside the same parent wrapper */}
        <img 
          src={HeroImg} 
          width={212} 
          alt="Headphones" 
        />
      </div>
    </section>
    </>
  )
}

export default Hero
