import React from 'react'
import Logo from './Logo'
import Button from './Button'
import Search from './Search'
import styles from '../CSS/Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <nav className={styles.navstyle}>
       <Logo/>
       <Search/>
        <Button btn="Give Feedback"/>
    </nav>
    </>
  )
}

export default Navbar;
