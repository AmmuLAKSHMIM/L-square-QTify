import React from 'react'
import HeroImg from "./Assets/Hero.png";
import styles from "../Components/CSS/Hero.module.css"

const Hero = () => {
  return (
    <>
    <section className={styles.heroWrapper}>
      <h2>100 Thousands songs,ad-free <br /> Over thousands podcast episodes</h2>
      <img src={HeroImg} alt="Heroimg" />
      </section>
    </>
  )
}

export default Hero
