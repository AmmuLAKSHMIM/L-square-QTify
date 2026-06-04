import React from 'react'
import HeroImg from '../Assets/Hero.png'
import styles from '../CSS/Hero.module.css'

const Hero = () => {
  return (
    <>
    <section className={styles.heroWrapper}>
      <p>100 thousands songs , add-free <br /> Over thousands Podcast episodes</p>
      <img src={HeroImg} alt="Heroimg" />
      </section>
    </>
  )
}

export default Hero
